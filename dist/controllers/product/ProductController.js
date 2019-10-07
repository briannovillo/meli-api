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
Object.defineProperty(exports, "__esModule", { value: true });
const MeliDataProvider_1 = require("./MeliDataProvider");
const ProductAPI_1 = require("../../models/ProductAPI");
exports.search = (q) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield MeliDataProvider_1.searchProductsByTitle(q);
    const items = products.map((product) => ({
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: product.price,
            decimals: 0
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping
    }));
    const categories = products.map((product) => product.category_id);
    return new ProductAPI_1.SearchProductsAPIResponse(items, categories);
});
exports.get = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield MeliDataProvider_1.getProductsById(id);
    const item = {
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: product.price,
            decimals: 0
        },
        picture: product.pictures[0].url,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        sold_quantity: product.sold_quantity,
        description: product.description
    };
    return new ProductAPI_1.GetProductAPIResponse((item));
});
//# sourceMappingURL=ProductController.js.map