import fetch from 'node-fetch';
import config from '../../config';

export const searchProductsByTitle = async (query: string) => await fetch(`${config.MELI_API_HOST}${config.MELI_API_SEARCH_ENDPOINT}?q=${query}`).then(res => res.json());
export const getProductsById = async (id: string) => await fetch(`${config.MELI_API_HOST}${config.MELI_API_ITEMS_ENDPOINT}/${id}`).then(res => res.json());