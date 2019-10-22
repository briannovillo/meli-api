import { searchProductsByTitle, getProductsById, getCategoryById } from "./MeliDataProvider";
import { Product, GetProductAPIResponse, SearchProductsAPIResponse } from "../../models/ProductAPI";
import { getMostFrequentWord, getDecimalsFromNumber } from "../../utils/Helper";

// Returns categories tree for a given id
const getCategoryChilds = async (id: string) => {
  const categoryInfo = await getCategoryById(id);
  return categoryInfo.path_from_root.map((cat: any) => cat.name);
};

// Returns categories tree for given products
const getCategoriesForProducts = async (products: any[]) => {
  const productCategories = products.map((json: any) => json.category_id);
  const mostFrequentCategoryId = getMostFrequentWord(productCategories);
  return await getCategoryChilds(mostFrequentCategoryId);
};

export const search = async (q: string) : Promise<SearchProductsAPIResponse> => {
  const products = await searchProductsByTitle(q);
  const items = products.map((json: any) => <Product>(
    {
      id: json.id,
      title: json.title,
      price: {
          currency: json.currency_id,
          amount: Math.floor(json.price),
          decimals: getDecimalsFromNumber(json.price)
      },
      picture: json.thumbnail,
      condition: json.condition,
      free_shipping: json.shipping.free_shipping
    }
  ));
  const categories = await getCategoriesForProducts(products);

  return new SearchProductsAPIResponse(items, categories);
}

export const get = async (id: string) : Promise<GetProductAPIResponse> => {
  const product = await getProductsById(id);
  const item = {
      id: product.id,
      title: product.title,
      price: {
          currency: product.currency_id,
          amount: Math.floor(product.price),
          decimals: getDecimalsFromNumber(product.price)
      },
      picture: product.pictures[0].url,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
      sold_quantity: product.sold_quantity,
      description: product.description
  };
  const categories = await getCategoryChilds(product.category_id);
  return new GetProductAPIResponse(<Product>(item), categories);
};