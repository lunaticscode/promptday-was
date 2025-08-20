const authMiddleware: AppMiddleware = (req, res, next) => {
  next();
};
export default authMiddleware;
