"use server";

import { redirect } from "next/navigation";
import { messages } from "@/i18n/messages";
import { prisma } from "@/lib/prisma";
import { establishSession, hashPassword } from "@/lib/auth/session";
import { initialLoginFormState, type LoginFormState } from "@/lib/auth/form-state";

function validateInput(email: string, password: string) {
  const fieldErrors: LoginFormState["fieldErrors"] = {};

  if (!email) {
    fieldErrors.email = messages.validation.login.emailRequired;
  }

  if (!password) {
    fieldErrors.password = messages.validation.login.passwordRequired;
  } else if (password.length < 6) {
    fieldErrors.password = messages.validation.login.passwordMinLength;
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
      message: prevState.message || messages.validation.login.signInFailed,
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
      message: messages.validation.login.invalidCredentials,
      fieldErrors: {},
      values: { email, password: "" },
    };
  }

  await establishSession(existingUser.id);
  redirect("/");
}
