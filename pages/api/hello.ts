import type { NextApiRequest, NextApiResponse } from "next";
import conn from "../../db";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const unix = new Date().toLocaleString();
  const query = `INSERT INTO users(username, password, email, created_on, last_login) VALUES('sean white', '0863', 'seanbrwh@gmail.com', '${unix}', '${unix}')`;

  const result = await conn.query(query);

  console.log("result", result);
}
