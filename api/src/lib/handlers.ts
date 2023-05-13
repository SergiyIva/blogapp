import { NextFunction, Request, Response } from "express";

const handlers = {
  getApp: (req: Request, res: Response) => {
    res.sendFile(process.cwd() + "/public/index.html");
  },
  handleError: (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error("** ОШИБКА СЕРВЕРА: " + err.message);
    res.status(500).send("Произошла ошибка сервера, приносим свои извинения.");
  }
};
export default handlers;
