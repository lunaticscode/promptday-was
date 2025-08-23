import { Router } from "express";
import llmRoute from "./llm.route";
import usageRoute from "./usage.route";
const apiRouter = Router();

apiRouter.use("/llm", llmRoute);
apiRouter.use("/usage", usageRoute);

export default apiRouter;
