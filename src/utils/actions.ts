"use server";

import { auth, signIn } from "@/auth";
import { sendRequest } from "./api";
import { revalidateTag } from "next/cache";

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

export const handleCreateUserAction = async (data: any) => {
  const session = await auth();
  const res = await sendRequest<IBackendRes<any>>({
    url: `/v1/users`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${session?.user?.access_token}`,
    },
    body: { ...data },
  });
  revalidateTag("list-users");
  return res;
};

export const handleUpdateUserAction = async (data: any) => {
  const session = await auth();
  const res = await sendRequest<IBackendRes<any>>({
    url: `/v1/users`,
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${session?.user?.access_token}`,
    },
    body: { ...data },
  });
  revalidateTag("list-users");
  return res;
};

export const handleDeleteUserAction = async (id: any) => {
  const session = await auth();
  const res = await sendRequest<IBackendRes<any>>({
    url: `/v1/users/${id}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${session?.user?.access_token}`,
    },
  });

  revalidateTag("list-users");
  return res;
};
