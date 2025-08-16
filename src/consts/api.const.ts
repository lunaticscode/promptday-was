import { config } from "dotenv";
config();

const RUNPOD_SERVERLESS_BASE_URL = process.env.RUNPOD_SERVERLESS_BASE_URL ?? "";

export { RUNPOD_SERVERLESS_BASE_URL };
