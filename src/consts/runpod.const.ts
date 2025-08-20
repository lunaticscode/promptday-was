import { config } from "dotenv";
config();

const RUNPOD_SERVERLESS_ENDPOINT_PATH =
  process.env.RUNPOD_SERVERLESS_ENDPOINT_PATH ?? "";
const RUNPOD_API_KEY = process.env.RUNPOD_API_KEY ?? "";

export { RUNPOD_API_KEY, RUNPOD_SERVERLESS_ENDPOINT_PATH };
