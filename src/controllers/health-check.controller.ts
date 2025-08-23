import { hostname } from "node:os";
import { uptime, version, env } from "node:process";

const appHealthCheckController: AppController = (_, res) => {
  return res.status(200).json({
    message: "Don't worry, Already activted.",
    timestamp: new Date().getTime(),
    hostname: hostname(),
    uptime: uptime(),
    node_version: version,
    env: env.NODE_ENV ?? "development",
  });
};

export default appHealthCheckController;
