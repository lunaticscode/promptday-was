import { BodyValidator } from ".";
import { AppError } from "../../consts/error.const";

export const bodyValidator: BodyValidator = (rules) => (req, res, next) => {
  if (!req.body) {
    throw new AppError(
      "(!) This request should be include body.",
      "BAD_REQUEST"
    );
  }
  if (!rules || (rules && !Object.keys(rules).length)) {
    return next();
  }
};
