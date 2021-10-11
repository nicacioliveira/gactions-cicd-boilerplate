import express, { json } from "express";
import http from "http";

import { config as setupEnv } from "dotenv";

setupEnv();

export const getEnvVar = (n: string) => process.env[n];
const app = express();
export const httpServer = http.createServer(app);

const configDependencies = () => {
  app.use(json());
};

const configRoutes = () => {
  app.get("/health", (_req, res) => {
    res.sendStatus(200);
  });

  app.get("/ping", (_req, res) => {
    res.send("pong").status(200);
  });

  app.use("/who", (req, res) => {
    res.json(req.headers);
  });

  app.use("*", (_req, res) => res.sendStatus(400));
};

export async function init() {
  // starts
  configDependencies();
  configRoutes();

  httpServer.listen(getEnvVar("PORT"), () =>
    console.log(`Api running on port: ${getEnvVar("PORT")}`)
  );
}

export async function close() {
  httpServer?.close();
}

export default app;
