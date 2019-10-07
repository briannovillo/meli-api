"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serverless = require('serverless-http');
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const routes_1 = __importDefault(require("./routes"));
const middlewares_1 = __importDefault(require("./middlewares"));
process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});
const router = express_1.default();
utils_1.applyMiddleware(middlewares_1.default, router);
utils_1.applyRoutes(routes_1.default, router);
exports.handler = serverless(router);
//# sourceMappingURL=server.js.map