import { Router } from "express";

const userRoute = Router();
userRoute.get("/", (req, res) => {
  console.log(req.headers);
  return res.status(200).json({});
});

export default userRoute;
