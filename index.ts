import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import config from "./core/config";
import * as http from "http";
import * as dotenv from "dotenv";
dotenv.config();
import { ApiError, SocketIO } from "./core";
import connectDB from "./core/db";
import { AuthRouter } from "./src/auth";

const app = express();
const port = config.PORT as string;
const server = http.createServer(app);
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/assets", express.static("assets"));

app.use("/api/auth/", AuthRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Serversss");
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
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
