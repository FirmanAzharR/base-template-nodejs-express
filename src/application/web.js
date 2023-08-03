import express from "express";
import bodyParser from "body-parser";
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";

export const web = express()

web.use(bodyParser.json({ limit: "10mb", extended: true }));
web.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
web.use(publicRouter)
web.use(errorMiddleware)