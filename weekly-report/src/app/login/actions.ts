"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { establishSession, hashPassword } from "@/lib/auth/session";
import { initialLoginFormState, type LoginFormState } from "@/lib/auth/form-state";

function validateInput(email: string, password: string) {
  const fieldErrors: LoginFormState["fieldErrors"] = {};

  if (!email) {
    fieldErrors.email = "邮箱不能为空";
  }

  if (!password) {
    fieldErrors.password = "密码不能为空";
  } else if (password.length < 6) {
    fieldErrors.password = "密码长度至少 6 位";
  }

  return fieldErrors;
}

export async function loginAction(
  prevState: LoginFormState = initialLoginFormState,
  formData: FormData,
): Promise<LoginFormState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "").trim();

  const fieldErrors = validateInput(email, password);
  if (fieldErrors.email || fieldErrors.password) {
    return {
      message: prevState.message || "登录失败，请检查输入。",
      fieldErrors,
      values: { email, password },
    };
  }

  const passwordHash = hashPassword(password);
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (!existingUser) {
    const createdUser = await prisma.user.create({
      data: { email, password: passwordHash },
      select: { id: true },
    });
    await establishSession(createdUser.id);
    redirect("/");
  }

  if (existingUser.password !== passwordHash) {
    return {
      message: "邮箱或密码错误。",
      fieldErrors: {},
      values: { email, password: "" },
    };
  }

  await establishSession(existingUser.id);
  redirect("/");
}
