import type { NextApiRequest, NextApiResponse } from "next";
import conn from "../../db";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const d = Date.now();
  const query = `INSERT INTO users(username, password, email, created_at, last_login) VALUES("sean white", "0863", "seanbrwh@gmail.com", "${d}", "${d}")`;

  const result = await conn.query(query);
}
