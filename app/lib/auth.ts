import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import YandexProvider from "next-auth/providers/yandex";
import { YandexProfile } from "next-auth/providers/yandex";

import prisma from "./db";
import { compare } from "bcrypt";

type User = {
  id: string;
  email: string;
  password: string;
  created_at: Date;
  username: string;
  image: string;
  phone: string;
  role: string;
};
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
        email: { label: "Email", type: "email", placeholder: "podgoroy@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email && !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (!user) {
          return null;
        }

        const passwordCheck = await compare(
          credentials.password,
          user.password
        );

        if (passwordCheck) {
          return {id: user.id.toString(), username: user.username, image: user.image, email: user.email, phone: user.phone, role: user.role};
        }
      },
    }),
    // ...add more providers here
    YandexProvider({
      profile(profile: YandexProfile) {
          console.log(profile)
          return{ 
          id: profile.id,
          email: profile.default_email,
          username: profile.display_name,
          phone:  profile.default_phone.number,
          image: 'https://avatars.yandex.net/get-yapic/' + profile.default_avatar_id,
          role: 'user'
        }


      },
      clientId: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user }) {
        if (user) {token.username = user.username; token.email = user.email; token.phone = user.phone; token.role = user.role}
        return token
    },
    // If you want to use the role in client components
    async session({ session, token }) {
        if (session?.user) {session.user.username = token.username; session.user.email = token.email; session.user.phone = token.phone; session.user.role = token.role}
        return session
    },
}
}//