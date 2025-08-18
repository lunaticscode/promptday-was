declare global {
  type AppController = (
    req: import("express").Request,
    res: import("express").Response,
    next?: import("express").NextFunction
  ) => void | Promise<void>;

  type AppMiddleware = (
    req: import("express").Request,
    res: import("express").Response,
    next: import("express").NextFunction
  ) => void | Promise<void>;

  type AppErrorMiddleware = (
    err: unknown,
    req: import("express").Request,
    res: import("express").Response,
    next: import("express").NextFunction
  ) => void;
}

export {};
