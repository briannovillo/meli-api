"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetProductAPIResponse {
    constructor(product) {
        this.author = { name: "Brian", lastname: "Novillo" };
        this.item = product;
    }
}
exports.GetProductAPIResponse = GetProductAPIResponse;
class SearchProductsAPIResponse {
    constructor(products, categories) {
        this.author = { name: "Brian", lastname: "Novillo" };
        this.items = products;
        this.categories = categories;
    }
}
exports.SearchProductsAPIResponse = SearchProductsAPIResponse;
//# sourceMappingURL=ProductAPI.js.map