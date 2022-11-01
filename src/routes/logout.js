import { Router } from "express";
import User from "../models/User.js";

const logoutRouter = Router();

logoutRouter.get("/", async (req, res) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
    // req.session.destroy(async (err) => {
    //   const datosUsuario = await User.findById(req.user._id).lean();
    //   if (!err) res.render('Logout', {datosUsuario}); 
    //   else res.send("Error");
    // });
});

export default logoutRouter;