import { getPromptResultFromRunpod } from "../api/runpod.api";
import { AppError } from "../consts/error.const";

export const getLlmPromptResultController: AppController = async (req, res) => {
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
};
