import nextConnect from "next-connect";
import { auth } from "../../middleware/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = nextConnect();

handler
  .use(auth)
  .get(async (req: any, res: any) => {
    // TODO get user by id
    const { id } = req.body;
    // You do not generally want to return the whole user object
    // because it may contain sensitive field such as !!password!! Only return what needed
    // const { name, username, favoriteColor } = req.user
    // res.json({ user: { name, username, favoriteColor } })
    const user = await prisma.users.findUnique({ where: { user_id: id } });
    req.user = user;

    const { username, email } = user;

    res.json({ user: { username, email } });
  })
  .post(async (req: any, res: any) => {
    //TODO create user
    const { username, password, email } = req.body;
    const user = await prisma.users.create({
      data: {
        username: username,
        password: password,
        email: email,
        created_on: Date.now().toLocaleString(),
      },
    });
    req.user = user;
    // createUser(req, { username, password, name });
    res.status(200).json({ success: true, message: "created new user", user });
  })
  .use((req: any, res: any, next) => {
    //TODO make sure there is a user to update or delete a user
    if (!req.user) {
      res.status(401).send("unauthenticated");
    } else {
      next();
    }
  })
  .put((req: any, res: any) => {
    //TODO update user by id
    const { id } = req.body;
    const user = prisma.users.update({
      where: { user_id: id },
      data: { ...req.body },
    });
    res.json({ user });
  })
  .delete((req: any, res: any) => {
    //TODO delete user by id
    const { id } = req.body;
    prisma.users.delete({ where: { user_id: id } });
    req.logOut();
    res.status(204).end();
  });

export default handler;
