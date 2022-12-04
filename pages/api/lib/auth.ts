import passport from "passport";
import crypto from "crypto";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
var LocalStrategy = require("passport-local");

passport.use(
  new LocalStrategy(function verify(
    username: string,
    password: string,
    cb: any
  ) {
    prisma.users.findFirst({ where: { username } }).then((user) => {
      if (!user) {
        return cb(null, false, {
          message: "Incorrect username or password",
        });
      }
      crypto.pbkdf2(
        password,
        user.salt,
        310000,
        32,
        "sha256",
        function (err, hashedPassword) {
          if (err) {
            return cb(err);
          }
          if (
            !crypto.timingSafeEqual(
              new TextEncoder().encode(user.password),
              hashedPassword
            )
          ) {
            return cb(null, false, {
              message: "Incorrect username or password",
            });
          }
          return cb(null, user);
        }
      );
    });
  })
);

module.exports = passport;
