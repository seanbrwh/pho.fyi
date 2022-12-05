import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import passport from "../../lib/passport";
import { NextApiRequest, NextApiResponse } from "next";

const handler = nextConnect();

handler.use(auth).post(passport.authenticate("local"), (req: any, res: any) => {
  res.json({ user: req.user });
});

export default handler;
