"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductAPIResponse {
    constructor(product) {
        this.author = { name: "Brian", lastname: "Novillo" };
        this.item = {
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
            description: "product.description"
        };
    }
}
exports.default = ProductAPIResponse;
//# sourceMappingURL=ProductAPI.js.map