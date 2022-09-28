import { NextFunction, Request, Response } from 'express';

const errorMiddleware = async (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Promise<Response> => res.status(500)
  .json({ message: 'Internal Server Error' });

export default errorMiddleware;