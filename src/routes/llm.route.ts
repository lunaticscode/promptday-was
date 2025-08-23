import { Router } from "express";
import userAgentMiddleware from "../middlewares/userAgent.middleware";
import { getLlmPromptResultController } from "../controllers/llm.controller";

const llmRoute = Router();

llmRoute.post(
  "/prompt",
  userAgentMiddleware("aggressive-bot"),
  getLlmPromptResultController
);

export default llmRoute;
