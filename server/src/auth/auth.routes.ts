import { Router } from "express";

import AuthController from "./auth.controller";

const router = Router();

const authCtrl = new AuthController();

router.route("/signup").post(authCtrl.signUp);
router.route("/createUser").post(authCtrl.saveUser);
router.route("/signin").post(authCtrl.signIn);
router.route("/signout").post(authCtrl.signOut);

export { router as AuthRouter };
