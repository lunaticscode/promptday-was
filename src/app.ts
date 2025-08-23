import express from "express";
import { hostname } from "node:os";
import { rateLimit } from "express-rate-limit";
import compression from "compression";
import { APP_PORT } from "./consts/app.const";
import errorMiddleware from "./middlewares/error.middleware";
import apiRouter from "./routes/index.route";
import appHealthCheckController from "./controllers/health-check.controller";
import userAgentMiddleware from "./middlewares/userAgent.middleware";

const rateLiimter = rateLimit({
  windowMs: 60 * 1000,
  limit: 30, // each IP to 30 requests per 1 min
});

const app = express();

app.use(rateLiimter);
app.use(express.json());
app.use(compression());

app.get(
  "/health-check",
  userAgentMiddleware("normal-bot"),
  appHealthCheckController
);
app.use("/api", apiRouter);

app.use(errorMiddleware);

app.listen(APP_PORT, () => {
  console.log(`Express running on ${APP_PORT}.`);
});
