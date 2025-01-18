import express from "express";
import cors from "cors";
import "dotenv/config";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "../trpc/router";
import { createContext } from "../trpc";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/api/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.get("/api", (_req, res) => {
  res.status(200).json({ message: "Hello from the server!" });
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
