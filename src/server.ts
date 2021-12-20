import express from "express";
import { json, urlencoded } from "body-parser";
import routes from "./routes";
import AuthMiddleare from "./middleware/auth";

const app = express();
const authMiddleware = new AuthMiddleare();

app.use(authMiddleware.auth);
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(routes);

export default app;
