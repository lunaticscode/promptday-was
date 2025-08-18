import { Router } from "express";
import llmRoute from "./llm.route";
const apiRouter = Router();

apiRouter.use("/llm", llmRoute);

export default apiRouter;
