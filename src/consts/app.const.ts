import { config } from "dotenv";
config();

const APP_PORT = process.env.APP_PORT ?? "8088";

export { APP_PORT };
