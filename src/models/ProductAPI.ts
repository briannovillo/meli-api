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
    sold_quantity: Number
    description: String
}

class ProductAPIResponse {
    readonly author: Author;
    private item: Product;

    constructor(product: any) {
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
    //categories: [String]
    //items: [Product]
}

export default ProductAPIResponse;