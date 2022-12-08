import nextConnect from "next-connect";
import { auth } from "../../middleware/auth";
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
  .post(async (req: any, res: any) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      return res.status(400).send("Missing fields");
    }
    // Here you check if the username has already been used
    const usernameExsits = await prisma.users.findUnique({
      where: { email: email },
    });

    console.log(usernameExsits);

    // const usernameExisted = !!findUserByUsername(req, username);
    if (usernameExsits) {
      return res.status(409).send("The username has already been used");
    }
    // Security-wise, you must hash the password before saving it
    // const hashedPass = await argon2.hash(password);
    // const user = { username, password: hashedPass, name }
    const date = new Date();
    const user = await prisma.users.create({
      data: {
        username: username,
        password: password,
        email: email,
        created_on: date.toISOString(),
      },
    });
    // createUser(req, user);
    req.logIn(user, (err: any) => {
      if (err) throw err;
      console.log(err);
      // Log the signed up user in
      res.status(201).json({
        user,
      });
    });
  });

export default handler;
