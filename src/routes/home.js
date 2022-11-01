import { Router } from "express";

const homeRouter = Router();

homeRouter.get("/", (req, res) => {
    if (req.session.nombre) {
        res.redirect("/datos");
    } else {
        res.redirect("/login");
    }
});

export default homeRouter;