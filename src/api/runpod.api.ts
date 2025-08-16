import { Pool } from "undici";
import { RUNPOD_SERVERLESS_BASE_URL } from "../consts/api.const";

const DEFAULT_RUNPOD_POOL_CONNECTIONS = 128;
const DEFAULT_RUNPOD_POOL_KEEPALIVE_TIMEOUT = 30_000;
const DEFAULT_RUNPOD_POOL_KEEPALIVE_MAX_TIMEOUT = 60_000;

const runpodConnectionPoolOptions: Pool.Options = {
  connections: DEFAULT_RUNPOD_POOL_CONNECTIONS,
  keepAliveTimeout: DEFAULT_RUNPOD_POOL_KEEPALIVE_TIMEOUT,
  keepAliveMaxTimeout: DEFAULT_RUNPOD_POOL_KEEPALIVE_MAX_TIMEOUT,
};

const runpodConnectionPool = new Pool(
  RUNPOD_SERVERLESS_BASE_URL,
  runpodConnectionPoolOptions
);

export { RUNPOD_SERVERLESS_BASE_URL };
