import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/test", async (req: Request, res: Response) => {
  res.send("we here");
});

const httpPort = process.env.HTTP_PORT;
const httpsPort = process.env.HTTPS_PORT;

app.listen(httpPort, () => {
  console.log(`HTTP server running on ${httpPort}`);
});
app.listen(httpsPort, () => {
  console.log(`HTTPS server running on ${httpsPort}`);
});
