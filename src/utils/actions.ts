"use server";

import { signIn } from "@/auth";

export async function authenticate(email: string, password: string) {
  try {
    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    return response;
  } catch (error) {
    if ((error as any).name === "InvalidEmailPasswordError") {
      return {
        error: (error as any).type,
        code: 400,
      };
    } else if ((error as any).name === "InactiveAccountError") {
      return {
        error: (error as any).type,
        code: 401,
      };
    } else {
      return {
        error: "Internal server error",
        code: 500,
      };
    }
  }
}
