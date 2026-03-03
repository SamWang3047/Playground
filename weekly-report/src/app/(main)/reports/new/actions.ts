"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireSessionUser } from "@/lib/auth/session";
import { createWeeklyReport } from "@/lib/reports/service";
import {
  initialCreateReportFormState,
  type CreateReportFormState,
} from "@/lib/reports/form-state";

function validateInput(title: string, summary: string) {
  const fieldErrors: CreateReportFormState["fieldErrors"] = {};

  if (!title) {
    fieldErrors.title = "标题不能为空";
  } else if (title.length > 80) {
    fieldErrors.title = "标题不能超过 80 个字符";
  }

  if (!summary) {
    fieldErrors.summary = "摘要不能为空";
  } else if (summary.length < 10) {
    fieldErrors.summary = "摘要至少需要 10 个字符";
  }

  return fieldErrors;
}

export async function createReportAction(
  prevState: CreateReportFormState = initialCreateReportFormState,
  formData: FormData,
): Promise<CreateReportFormState> {
  const user = await requireSessionUser();
  const title = String(formData.get("title") ?? "").trim();
  const summary = String(formData.get("summary") ?? "").trim();

  const fieldErrors = validateInput(title, summary);
  if (fieldErrors.title || fieldErrors.summary) {
    return {
      message: prevState.message || "提交失败，请修正表单错误后重试。",
      fieldErrors,
      values: { title, summary },
    };
  }

  await createWeeklyReport(user.id, { title, summary });
  revalidatePath("/");
  revalidatePath("/reports");
  redirect("/reports");
}
