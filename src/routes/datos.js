import User from "../models/User.js";
import { Router } from "express";
import auth from "../middlewares/auth.js";

const datosRouter = Router();

datosRouter.get("/", auth, async (req, res) => {
    const datosUsuario = await User.findById(req.user._id).lean();
    res.render("datos", {
        datos: datosUsuario,
    });
});

export default datosRouter;