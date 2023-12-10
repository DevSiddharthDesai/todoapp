import express, { NextFunction, Request, Response } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import * as http from "http";
import * as dotenv from "dotenv";
dotenv.config();

import config from "./core/config";

import { ApiError } from "./core";
import connectDB from "./core/db";
import { AuthRouter } from "./src/auth";
import { authConfig } from "../client/src/auth_config";

type CustomAuthOptions = {
  audience: string;
  issuerBaseURL: string;
  algorithms: string[];
};

const app = express();
const port = config.PORT as string;
const server = http.createServer(app);

if (
  !authConfig.domain ||
  !authConfig.audience ||
  authConfig.audience === "YOUR_API_IDENTIFIER"
) {
  console.log(
    "Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values"
  );

  process.exit();
}

connectDB();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

const checkJwtOptions: CustomAuthOptions = {
  audience: authConfig.audience,
  issuerBaseURL: `https://${authConfig.domain}/`,
  algorithms: ["RS256"],
};

const checkJwt = auth(checkJwtOptions);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/assets", express.static("assets"));

app.use("/api/auth/", AuthRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Serversss");
});

app.get("/api/external", checkJwt, (_req: Request, res: Response) => {
  console.log(checkJwt);
  res.send({
    msg: "Your access token was successfully validated!",
  });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err);
  if (err instanceof ApiError) {
    return res.status(err.httpStatusCode).json({
      message: err.message,
      errors: err.errors,
    });
  }
  return res.status(500).send("Internal Server Error");
});

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
