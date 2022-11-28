import type { NextApiRequest, NextApiResponse } from "next";
import { deflate } from "zlib";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}
