import nextConnect from "next-connect";
import passport from "../lib/passport";
import session from "../lib/session";

export const auth = nextConnect()
  .use(
    session({
      name: "sess",
      secret: process.env.TOKEN_SECRET,
      cookie: {
        maxAge: 60 * 60 * 8, // 8 hours,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
      },
    })
  )
  .use((req: any, res: any, next: any) => {
    next();
  })
  .use(passport.initialize())
  .use(passport.session());
