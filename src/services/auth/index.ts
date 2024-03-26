
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../database";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
    pages: {
        signIn: '/auth',
        signOut: '/auth',
        error: '/auth',
        verifyRequest: '/auth',
        newUser: '/'
    },
  adapter: PrismaAdapter(prisma),
  secret: '12345678910',
  providers: [
    EmailProvider({
      server: {host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "595b75cd5d4180",
        pass: "99343b708e2722"
      }
    },
      from: 'wanderguizi@gmail.com',
    }),
  ],
});
