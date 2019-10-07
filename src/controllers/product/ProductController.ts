import { searchProductsByTitle, getProductsById } from "./MeliDataProvider";
import { Product, GetProductAPIResponse, SearchProductsAPIResponse } from "../../models/ProductAPI";

export const search = async (q: string) => {
  const products = await searchProductsByTitle(q);
  const items = products.map((product: any) => <Product>(
    {
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
    }
  ));
  const categories = products.map((product: any) => product.category_id);

  return new SearchProductsAPIResponse(items, categories);
}

export const get = async (id: string) => {
  const product = await getProductsById(id);
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
  return new GetProductAPIResponse(<Product>(item));
};