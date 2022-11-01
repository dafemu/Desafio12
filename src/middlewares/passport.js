import User from "../models/User.js";
import bcrypt from "bcrypt";
import passport from "passport";

import { Strategy } from "passport-local";
const LocalStrategy = Strategy;

passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) console.log(err);
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) console.log(err);
          if (isMatch) return done(null, user);
          return done(null, false);
        });
      });
    })
  );
  
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    return done(null, user);
  });

  export default passport;