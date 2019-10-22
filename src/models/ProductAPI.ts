class Author {
    readonly name: String = "Brian";
    readonly lastname: String = "Novillo";
}

interface IAuthor {
    readonly author: Author
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

class GetProductAPIResponse implements IAuthor {
    readonly author: Author;
    private item: Product;
    private categories: [String];

    constructor(product: Product, categories: [String]) {
        this.author = new Author();
        this.item = product;
        this.categories = categories;
    }
}

class SearchProductsAPIResponse implements IAuthor {
    readonly author: Author;
    private items: [Product];
    private categories: [String];

    constructor(products: [Product], categories: [String]) {
        this.author = new Author();
        this.items = products;
        this.categories = categories;
    }
}


export {
    Product,
    GetProductAPIResponse,
    SearchProductsAPIResponse
};