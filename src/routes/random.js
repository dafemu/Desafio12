import { Router } from "express";
import { fork } from "child_process";

const randomRouter = Router();

randomRouter.get("/", function (req, res) {
    const cantidad = req.params.cant;
    const child = fork("../utils/random.js");

    

    child.send(["start", cantidad]);  
    child.on("message", (numRand) => {
      res.send(`La numero Random es ${numRand}`);
    });
});

export default randomRouter;