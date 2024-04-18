"use server";
import { z } from "zod";
import { updateProfileSchema } from "./schema";
import { auth } from "@/services/auth";
import { error } from "console";
import { prisma } from "@/services/database";

export const updateProfile = async (
  input: z.infer<typeof updateProfileSchema>
) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Not Autorized",
      data: null,
    };
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name: input.name,
    },
  });
};
