import { Router } from "express";

import { currentUser } from "../../core/middlewares/current-user";
import AuthController from "./auth.controller";

const router = Router();

const authCtrl = new AuthController();

router.route("/signup").post(authCtrl.signUp);
router.route("/signin").post(authCtrl.signIn);
router.route("/signout").post(authCtrl.signOut);

router.route("/test").get(currentUser(process.env.JWT_SECRET!), authCtrl.test);

export { router as AuthRouter };
