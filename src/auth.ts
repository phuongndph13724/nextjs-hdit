import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { InactiveAccountError, InvalidEmailPasswordError } from "./utils/error";
import { sendRequest } from "./utils/api";
import { IUser } from "./types/next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await sendRequest<IBackendRes<any>>({
          method: "POST",
          url: "/v1/auth/signin",
          body: {
            email: credentials.email,
            password: credentials.password,
          },
        });
        if (res.statusCode === 201) {
          return {
            access_token: res.data.access_token,
          };
        } else if (+res.statusCode === 401) {
          throw new InvalidEmailPasswordError();
        } else if (+res.statusCode === 400) {
          throw new InactiveAccountError();
        } else {
          throw new Error("Internal server error");
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.user = user as IUser;
        token.access_token = token.access_token;
      }
      return token;
    },
    session({ session, token }) {
      (session.user as IUser) = token.user;
      session.access_token = token.access_token;
      return session;
    },
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
});
