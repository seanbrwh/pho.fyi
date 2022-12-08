import nextConnect from "next-connect";
import { auth } from "../../middleware/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = nextConnect();

handler
  .use(auth)
  .get((req: any, res: any) => {
    // You do not generally want to return the whole user object
    // because it may contain sensitive field such as !!password!! Only return what needed
    // const { name, username, favoriteColor } = req.user
    // res.json({ user: { name, username, favoriteColor } })
    res.json({ user: req.user });
  })
  .post((req: any, res: any) => {
    const { username, password, email } = req.body;
    prisma.users.create({
      data: {
        username: username,
        password: password,
        email: email,
        created_on: Date.now().toLocaleString(),
      },
    });
    // createUser(req, { username, password, name });
    res.status(200).json({ success: true, message: "created new user" });
  })
  .use((req: any, res: any, next) => {
    // handlers after this (PUT, DELETE) all require an authenticated user
    // This middleware to check if user is authenticated before continuing
    if (!req.user) {
      res.status(401).send("unauthenticated");
    } else {
      next();
    }
  })
  .put((req: any, res: any) => {
    const { name } = req.body;
    const user = prisma.users.update({
      where: { user_id: 1 },
      data: { username: name },
    });
    // const user = updateUserByUsername(req, req.user.username, { name });
    res.json({ user });
  })
  .delete((req: any, res: any) => {
    prisma.users.delete({ where: { user_id: 1 } });
    // deleteUser(req);
    req.logOut();
    res.status(204).end();
  });

export default handler;
