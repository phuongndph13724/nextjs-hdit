"use server";

import { signIn } from "@/auth";

export async function authenticate(email: string, password: string) {
  try {
    const response = await signIn("credentials", {
      username: email,
      password: password,
      redirect: false,
    });
    return response;
  } catch (error) {
    return { error: "Lỗi" };
  }
}
