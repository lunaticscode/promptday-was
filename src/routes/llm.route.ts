import { Router } from "express";
import { AppError } from "../consts/error.const";
import { getPromptResultFromRunpod } from "../api/runpod.api";
import userAgentMiddleware from "../middlewares/userAgent.middleware";

const llmRoute = Router();

llmRoute.post(
  "/prompt",
  userAgentMiddleware("aggressive-bot"),
  async (req, res) => {
    const { prompt = "" } = req.body ?? { prompt: "" };
    if (!prompt) {
      throw new AppError("Invalid prompt", "BAD_REQUEST");
    }
    try {
      const promptResult = await getPromptResultFromRunpod(prompt);
      return res.status(200).json(promptResult);
    } catch (err) {
      throw err;
    }
  }
);

export default llmRoute;
