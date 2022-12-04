import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import passport from "passport";
import { off } from "process";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
    });
  }
}
