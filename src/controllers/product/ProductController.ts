import { searchProductsByTitle, getProductsById } from "./MeliDataProvider";
import ProductAPIResponse from "../../models/ProductAPI";

export const search = async (q: string) => {
  await searchProductsByTitle(q);
}

export const get = async (id: string) => new ProductAPIResponse(await getProductsById(id));