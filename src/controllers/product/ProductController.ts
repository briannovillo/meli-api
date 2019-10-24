import { searchProductsByTitle, getProductsById, getCategoryById } from "./MeliDataProvider";
import { Product, GetProductAPIResponse, SearchProductsAPIResponse } from "../../models/ProductAPI";
import { getMostFrequentWord, getTwoDecimalsFromNumber } from "../../utils/Helper";

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

export const search = async (q: string) : Promise<SearchProductsAPIResponse|Error> => {
  const products = await searchProductsByTitle(q);

  // On MELI API a search with no results returns an empty array
  if(!products.length) throw Error('No Data Found');
  
  const items = products.map((json: any) => <Product>(
    {
      id: json.id,
      title: json.title,
      price: {
          currency: json.currency_id,
          amount: Math.floor(json.price),
          decimals: getTwoDecimalsFromNumber(json.price)
      },
      picture: json.thumbnail,
      condition: json.condition,
      free_shipping: json.shipping.free_shipping
    }
  ));
  const categories = await getCategoriesForProducts(products);

  return new SearchProductsAPIResponse(items, categories);
}

export const get = async (id: string) : Promise<GetProductAPIResponse|Error> => {
  const product = await getProductsById(id);
  
  /**
   * On MELI API a Get for unknown id returns an error object:
   * 
   * {
   *  "message": "Item with id MLA772189442ss not found.",
   *  "error": "not_found",
   *  "status": 404,
   *  "cause": []
   * }
   * */
  if(!product.ok) throw product;

  const item = {
      id: product.id,
      title: product.title,
      price: {
          currency: product.currency_id,
          amount: Math.floor(product.price),
          decimals: getTwoDecimalsFromNumber(product.price)
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