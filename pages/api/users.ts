import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = nextConnect();

handler
  .use(auth)
  .get((req: any, res: any) => {
    // For demo purpose only. You will never have an endpoint which returns all users.
    // Remove this in production
    res.json({ users: prisma.users.findMany() });
    // res.json({ users: getAllUsers(req) });
  })
  .post((req: any, res: any) => {
    const { username, password, name } = req.body;
    if (!username || !password || !name) {
      return res.status(400).send("Missing fields");
    }
    // Here you check if the username has already been used
    const usernameExsits = !!prisma.users.findFirst({ where: { username } });
    // const usernameExisted = !!findUserByUsername(req, username);
    if (usernameExsits) {
      return res.status(409).send("The username has already been used");
    }
    const user = { username, password, name };
    // Security-wise, you must hash the password before saving it
    // const hashedPass = await argon2.hash(password);
    // const user = { username, password: hashedPass, name }
    prisma.users.create({ data: { ...user } });
    // createUser(req, user);
    req.logIn(user, (err: any) => {
      if (err) throw err;
      // Log the signed up user in
      res.status(201).json({
        user,
      });
    });
  });

export default handler;
