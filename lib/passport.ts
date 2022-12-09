import passport from "passport";
import crypto from "crypto";
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
    async (req: any, username: any, password: any, done: any) => {
      // Here you lookup the user in your DB and compare the password/hashed password
      const user = await prisma.users.findFirst({
        where: { username: username },
      });

      crypto.pbkdf2(
        password,
        user.salt,
        310000,
        32,
        "sha256",
        function (err, hashedPass) {
          if (err) {
            return done(err);
          }
          if (
            !crypto.timingSafeEqual(
              new TextEncoder().encode(user.password),
              hashedPass
            )
          ) {
            return done(null, false, {
              message: "Incorrect username or password.",
            });
          }
          return done(null, user);
        }
      );
    }
  )
);

export default passport;
