import { config } from "dotenv";
config();

const APP_PORT = process.env.APP_PORT ?? "8088";
const APP_MODE = process.env.APP_MODE ?? "development";
export { APP_PORT, APP_MODE };
