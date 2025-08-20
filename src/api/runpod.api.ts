import { Pool } from "undici";
import { RUNPOD_SERVERLESS_BASE_URL } from "../consts/api.const";
import {
  RUNPOD_API_KEY,
  RUNPOD_SERVERLESS_ENDPOINT_PATH,
} from "../consts/runpod.const";
import { AppError } from "../consts/error.const";

const DEFAULT_RUNPOD_POOL_CONNECTIONS = 128;
const DEFAULT_RUNPOD_POOL_KEEPALIVE_TIMEOUT = 30_000;
const DEFAULT_RUNPOD_POOL_KEEPALIVE_MAX_TIMEOUT = 60_000;

const runpodConnectionPoolOptions: Pool.Options = {
  connections: DEFAULT_RUNPOD_POOL_CONNECTIONS,
  keepAliveTimeout: DEFAULT_RUNPOD_POOL_KEEPALIVE_TIMEOUT,
  keepAliveMaxTimeout: DEFAULT_RUNPOD_POOL_KEEPALIVE_MAX_TIMEOUT,
};
console.log(RUNPOD_SERVERLESS_BASE_URL);
const runpodConnectionPool = new Pool(
  RUNPOD_SERVERLESS_BASE_URL,
  runpodConnectionPoolOptions
);

const getPromptResultFromRunpod = async (prompt: string) => {
  try {
    const req = await runpodConnectionPool.request({
      path: `${RUNPOD_SERVERLESS_ENDPOINT_PATH}/runsync`,
      method: "POST",
      headers: {
        Authorization: RUNPOD_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: { prompt } }),
    });
    const { body, statusCode } = req;
    if (statusCode === 200) {
      const jsonOutput = (await body.json()) as { output: any };
      return "output" in jsonOutput ? jsonOutput.output : jsonOutput;
    }
    throw new AppError(
      `Invalid 'getPromptResultFromRunpod' status code :: ${statusCode}`,
      "RUNPOD_ERROR"
    );
  } catch (err) {
    throw err;
  }
};

export { getPromptResultFromRunpod };
