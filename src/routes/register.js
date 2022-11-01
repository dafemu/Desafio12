import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const registerRouter = Router();

registerRouter.get("/", (req, res) => {
    res.render("register");
});
  
registerRouter.post("/", (req, res) => {
    const { username, password, direccion } = req.body;
    User.findOne({ username }, async (err, user) => {
        if (err) console.log(err);
        if (user) res.render("register-error");
        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 8);
            const newUser = new User({
                username,
                password: hashedPassword,
                direccion,
            });
            await newUser.save();
            res.redirect("/login");
        }
    });
});

export default registerRouter;