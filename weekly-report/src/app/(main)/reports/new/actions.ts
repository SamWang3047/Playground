"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { messages } from "@/i18n/messages";
import { requireSessionUser } from "@/lib/auth/session";
import { createWeeklyReport } from "@/lib/reports/service";
import {
  initialCreateReportFormState,
  type CreateReportFormState,
} from "@/lib/reports/form-state";

function validateInput(title: string, summary: string) {
  const fieldErrors: CreateReportFormState["fieldErrors"] = {};

  if (!title) {
    fieldErrors.title = messages.validation.report.titleRequired;
  } else if (title.length > 80) {
    fieldErrors.title = messages.validation.report.titleTooLong;
  }

  if (!summary) {
    fieldErrors.summary = messages.validation.report.summaryRequired;
  } else if (summary.length < 10) {
    fieldErrors.summary = messages.validation.report.summaryTooShort;
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
      message: prevState.message || messages.validation.report.submitFailed,
      fieldErrors,
      values: { title, summary },
    };
  }

  await createWeeklyReport(user.id, { title, summary });
  revalidatePath("/");
  revalidatePath("/reports");
  redirect("/reports");
}
