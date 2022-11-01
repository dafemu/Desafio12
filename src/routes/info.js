import { Router } from "express";
import minimist from "minimist";

const infoRouter = Router();

/*----------- minimist -----------*/
const options = { alias: { p: "puerto", d: "debug" } };
const valueMinimist = minimist(process.argv.slice(2), options);

infoRouter.get("/", function (req, res) {
    res.send({
      Arguments: valueMinimist,
      OperatingSystem: process.platform,
      versionNode: process.version,
      routeFile: process.cwd(),
      processId : process.pid,
      executionPath : req.url,
      memory: process.memoryUsage().rss
    });
});

export default infoRouter;