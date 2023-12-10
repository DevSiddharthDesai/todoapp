import { Request, Response, NextFunction } from "express";
import { authService } from "./auth.service";
import { IAuth, IUser } from "./auth.schema";
import { JsonWebTokenError } from "../../core/errors.core";

class AuthController {
  async saveUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IUser = req.body;
      const newUser = await authService.createV2(user);
      if (newUser) {
        res.status(201).send("User Created Successfully");
      }
    } catch (e) {
      next(e);
    }
  }
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IAuth = req.body;
      const newUser = await authService.create(user);
      if (newUser) {
        res.status(201).send("User Created Successfully");
      }
    } catch (e) {
      next(e);
    }
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IAuth = req.body;
      const LoginToken = await authService.signIn(user);

      if (LoginToken) {
        res
          .status(200)
          .cookie("access-token", LoginToken)
          .send("Logged In Successfully");
      }
    } catch (e) {
      next(e);
    }
  }

  async signOut(req: Request, res: Response, next: NextFunction) {
    const user: IUser = req.body;
    try {
      if (!req.headers.cookie) {
        return next(new JsonWebTokenError("Invalid Token"));
      }

      const cookies = req.headers.cookie;
      const tokenValue = cookies?.split("=")[1];

      const result = await authService.signOut(user, tokenValue);

      if (result) {
        res.status(200).send("Logged Out Successfully");
      }
    } catch (e) {
      res.status(400).send("" + e);
    }
  }

  async test(req: Request, res: Response, next: NextFunction) {
    res.status(200).send("Working");
  }
}

export default AuthController;
