import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/nodemailer";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../database";
import { createStripeCustomer } from "../stripe";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: "/app",
    signOut: "/auth",
    error: "/error",
    verifyRequest: "/auth",
    newUser: "/app",
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET_KEY,
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.FROM_EMAIL,
    }),
  ],
  events: {
    createUser: async (message) => {
      await createStripeCustomer({
        name: message.user.name as string,
        email: message.user.email as string,
      });
    },
  },
});
