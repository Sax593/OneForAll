require("dotenv").config();
import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
const router = require("./router");

const prisma = new PrismaClient();
const app = express();

const whitelist = process.env.FRONTEND_URL?.split(",") || [
  "http://localhost:3000/",
];
app.use(
  cors({
    origin(origin, callback) {
      if (origin && whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(null, true);
        //callback(new Error("Not allowed by CORS"));
      }
    },
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(5000, () => {
  console.log("Server ready at: http://localhost:5000");
});
