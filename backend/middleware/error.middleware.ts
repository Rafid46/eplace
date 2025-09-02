/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Request, Response, NextFunction } from "express";
const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.error(err);
    // mongodb bad objectId
    if (err.name === "castError") {
      const message = "resource not found";
      error = new Error(message);
      error.statusCode = 404;
    }
    // mongoose duplicate key
    if (err.code === 11000) {
      const message = "duplicate field value entered";
      error = new Error(message);
      error.statusCode = 400;
    }
    // mongoose validation error
    if (err.name === "validationError") {
      const message = Object.values(err.errors).map((val: any) => val.message);
      error = new Error(message.join(","));
      error.statusCode = 400;
    }
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
