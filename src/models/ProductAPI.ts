interface Author {
    readonly name: String;
    readonly lastname: String;
}

declare class Product {
    id: String
    title: String
    price: {
        currency: String
        amount: Number
        decimals: Number
    }
    picture: String
    condition: String
    free_shipping: Boolean
    sold_quantity?: Number
    description?: String
}

class GetProductAPIResponse {
    readonly author: Author;
    private item: Product;

    constructor(product: Product) {
        this.author = { name: "Brian", lastname: "Novillo" };
        this.item = product;
    }
}

class SearchProductsAPIResponse {
    readonly author: Author;
    private items: [Product];
    private categories: [String];

    constructor(products: [Product], categories: [String]) {
        this.author = { name: "Brian", lastname: "Novillo" };
        this.items = products;
        this.categories = categories;
    }
}

export {
    Product,
    GetProductAPIResponse,
    SearchProductsAPIResponse
};