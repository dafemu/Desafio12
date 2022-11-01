/*============================[Modulos]============================*/
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import exphbs from "express-handlebars";
import path from "path";
import passport from "passport";

import "./src/db/config.js";
import MongoStore from "connect-mongo";

const app = express();

/*============================[Middlewares]============================*/

/*----------- Session -----------*/
app.use(cookieParser());
app.use(
  session({
    store: new MongoStore({ mongoUrl: "mongodb://localhost/sesiones" }),
    secret: "1234567890!@#$%^&*()",
    resave: true,
    saveUninitialized: true,
    rolling: true,
    cookie: {
      maxAge: 1000000, //10 min
    },
  })
);

/*----------- Passport -----------*/
//manejo de autenticacion
app.use(passport.initialize());
app.use(passport.session());

/*----------- Motor de plantillas -----------*/
app.set("views", path.join(path.dirname(""), "./src/views"));
app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*----------- Gzip -----------*/
app.use(compression());

/*============================[Rutas]============================*/
import router from "./src/routes/index.js";
app.use("/", router);

/*============================[Servidor]============================*/
const PORT = 3000;

//levantamos el servidor
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
server.on("error", (error) => {
  console.error(`Error en el servidor ${error}`);
});
