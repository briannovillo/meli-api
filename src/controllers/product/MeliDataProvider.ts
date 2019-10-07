import fetch from 'node-fetch';
import config from '../../config';

export const searchProductsByTitle = async (query: string) => {
    return await fetch(`${config.MELI_API_HOST}${config.MELI_API_SEARCH_ENDPOINT}?q=${query}`)
                    .then(res => res.json())
                    .then(res => res.results);
};

export const getProductsById = async (id: string) => {
    const productPromise = fetch(`${config.MELI_API_HOST}${config.MELI_API_ITEMS_ENDPOINT}/${id}`)
                                .then(res => res.json());

    const productDescriptionPromise = fetch(`${config.MELI_API_HOST}${config.MELI_API_ITEMS_ENDPOINT}/${id}/description`)
                                            .then(res => res.json());

    const promises = await Promise.all([productPromise, productDescriptionPromise]);

    return {...promises[0], description: promises[1].plain_text};
};