import { Router } from "express";
const loginErrorRouter = Router();

loginErrorRouter.get("/", (req, res) => {
    res.render("login-error");
});

export default loginErrorRouter;