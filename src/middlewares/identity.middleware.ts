import { AppError } from "../consts/error.const";

const identityMiddleware: AppMiddleware = (req, _, next) => {
  const userToken = req.headers["token"] ?? null;
  console.log({ userToken });
  if (!userToken) {
    throw new AppError(
      "Invalid token from user request.",
      "INVALID_USER_TOKEN"
    );
  }
  req.identity = {
    token: userToken as string,
  };
  next();
};
export default identityMiddleware;
