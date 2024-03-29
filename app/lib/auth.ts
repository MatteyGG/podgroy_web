import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import YandexProvider from "next-auth/providers/yandex";

import prisma from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "podgroy@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email && !credentials?.password) {
          return null;
        }

        const existingUser = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (!existingUser) {
          return null;
        }

        const passwordCheck = await compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordCheck) {
          return null;
        }

        // Include the 'username' property in the returned object
        return {
          id: existingUser.id + "",
          email: existingUser.email,
          username: existingUser.username,
          phone: existingUser.phone,
          image: existingUser.image,
        };
      },
    }),
    // ...add more providers here
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, username: user.username };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: { ...session.user, username: token.username},
      };
    },
  },
};
