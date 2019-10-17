"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const config = require('config');
exports.searchProductsByTitle = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield node_fetch_1.default(`${config.get("HOSTS.MELI_API")}${config.get("ENDPOINTS.MELI_API_SEARCH")}?q=${query}`)
        .then(res => res.json())
        .then(res => res.results);
});
exports.getProductsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const productPromise = node_fetch_1.default(`${config.get("HOSTS.MELI_API")}${config.get("ENDPOINTS.MELI_API_ITEMS")}/${id}`)
        .then(res => res.json());
    const productDescriptionPromise = node_fetch_1.default(`${config.get("HOSTS.MELI_API")}${config.get("ENDPOINTS.MELI_API_ITEMS")}/${id}/description`)
        .then(res => res.json());
    const promises = yield Promise.all([productPromise, productDescriptionPromise]);
    return Object.assign(Object.assign({}, promises[0]), { description: promises[1].plain_text });
});
//# sourceMappingURL=MeliDataProvider.js.map