import express from "express";
import { rateLimit } from "express-rate-limit";
import compression from "compression";
import { APP_PORT } from "./consts/app.const";
import errorMiddleware from "./middlewares/error.middleware";
import apiRouter from "./routes/index.route";

const rateLiimter = rateLimit({
  windowMs: 60 * 1000,
  limit: 30, // each IP to 30 requests per 1 min
});

const app = express();

app.use(rateLiimter);
app.use(express.json());
app.use(compression());

app.use("/api", apiRouter);

app.use(errorMiddleware);

app.listen(APP_PORT, () => {
  console.log(`Express running on ${APP_PORT}.`);
});
