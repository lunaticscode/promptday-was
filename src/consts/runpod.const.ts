import { config } from "dotenv";
config();

const RUNPOD_API_KEY = process.env.RUNPOD_API_KEY ?? "";

export { RUNPOD_API_KEY };
