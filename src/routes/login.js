import { Router } from "express";
import passport from "passport";

const loginRouter = Router();

loginRouter.get("/", (req, res) => {
    res.render("login");
});

loginRouter.post("/", 
    passport.authenticate("local", { failureRedirect: "login-error" }), 
    (req, res) => {
        res.redirect("/datos");
    }
);

export default loginRouter;
