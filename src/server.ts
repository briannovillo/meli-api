const serverless = require('serverless-http');
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import routes from "./routes";
import middlewares from "./middlewares";

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});

const router = express();
applyMiddleware(middlewares, router);
applyRoutes(routes, router);

exports.handler = serverless(router);