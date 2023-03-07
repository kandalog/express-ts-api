import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();

import indexRouter from "./routes/indexRouter";
import userRouter from "./routes/userRouter";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

// Routes
app.use("/", indexRouter);
app.use("/users", userRouter);

export default app;
