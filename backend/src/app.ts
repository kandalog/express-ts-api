import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

app.get("/", (req: Request<{}, {}, {}>, res: Response) => {
  res.status(200).json({ message: "root" });
});

export default app;
