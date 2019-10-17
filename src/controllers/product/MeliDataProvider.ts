import fetch from 'node-fetch';
const config = require('config');

export const searchProductsByTitle = async (query: string) => {
    return await fetch(`${config.get("HOSTS.MELI_API")}${config.get("ENDPOINTS.MELI_API_SEARCH")}?q=${query}`)
                    .then(res => res.json())
                    .then(res => res.results);
};

export const getProductsById = async (id: string) => {
    const productPromise = fetch(`${config.get("HOSTS.MELI_API")}${config.get("ENDPOINTS.MELI_API_ITEMS")}/${id}`)
                                .then(res => res.json());

    const productDescriptionPromise = fetch(`${config.get("HOSTS.MELI_API")}${config.get("ENDPOINTS.MELI_API_ITEMS")}/${id}/description`)
                                            .then(res => res.json());

    const promises = await Promise.all([productPromise, productDescriptionPromise]);

    return {...promises[0], description: promises[1].plain_text};
};