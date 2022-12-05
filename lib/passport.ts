import passport from "passport";
const LocalStrategy = require("passport-local");

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

passport.serializeUser(function (user: any, done) {
  // serialize the username into session
  done(null, user.username);
});

passport.deserializeUser(function (req: any, id: any, done: any) {
  // deserialize the username back into user object
  const user = prisma.users.findFirst({ where: { user_id: id } });
  done(null, user);
});

passport.use(
  new LocalStrategy(
    { passReqToCallback: true },
    (req: any, username: any, password: any, done: any) => {
      // Here you lookup the user in your DB and compare the password/hashed password
      const user = prisma.users.findFirst({ where: { username: username } });
      // Security-wise, if you hashed the password earlier, you must verify it
      // if (!user || await argon2.verify(user.password, password))
      if (
        !user ||
        !prisma.users.findFirst({
          where: { username: username, password: password },
        })
      ) {
        done(null, null);
      } else {
        done(null, user);
      }
    }
  )
);

export default passport;
