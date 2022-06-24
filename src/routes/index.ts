import express, { Request, Response, NextFunction, Router } from "express";
const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.json("hello Irom");
});

export default router;
