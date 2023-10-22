import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Auth } from "../../src/auth/auth.schema";
import { JsonWebTokenError } from "../errors.core";

declare global {
  interface JwtPayload {
    email: string;
    userId: string;
  }

  namespace Express {
    interface Request {
      currentUser?: any;
    }
  }
}

export const currentUser =
  (jwt_key: any) => async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.cookie) {
      return next(new JsonWebTokenError("Invalid Token"));
    }

    const cookies = req.headers.cookie;
    const tokenValue = cookies?.split("=")[1];

    // if (!req.headers.authorization) {
    //   return next(new JsonWebTokenError("Invalid Token"));
    // }

    // const [_, token] = req.headers.authorization.split("Bearer ");

    try {
      const payload = jwt.verify(
        tokenValue,
        process.env.JWT_SECRET!
      ) as JwtPayload;

      const user = await Auth.findOne({ _id: payload.userId });

      if (!user) {
        return next(new JsonWebTokenError("User not found"));
      }

      req.currentUser = user;

      const tokenAvailable = await user.checkToken(tokenValue);

      if (!tokenAvailable) {
        return next(new JsonWebTokenError("Invalid Token"));
      }

      next();
    } catch (err) {
      return next(new JsonWebTokenError("Invalid Token"));
    }
  };
