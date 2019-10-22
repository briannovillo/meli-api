import fetch from 'node-fetch';
const config = require('config');

export const searchProductsByTitle = async (query: string) : Promise<any> => {
    return await fetch(`${config.get("hosts.meliApi")}${config.get("endpoints.meliApiSearch")}?q=${query}&limit=${config.get("meliApiSearchLimit")}`)
                    .then(res => res.json())
                    .then(res => res.results);
};

export const getCategoryById = async (id: string) : Promise<any> => {
    return await fetch(`${config.get("hosts.meliApi")}${config.get("endpoints.meliApiCategories")}/${id}`)
                    .then(res => res.json())
                    .then(res => res);
};

export const getProductsById = async (id: string) : Promise<any> => {
    const productPromise = fetch(`${config.get("hosts.meliApi")}${config.get("endpoints.meliApiItems")}/${id}`)
                                .then(res => res.json());

    const productDescriptionPromise = fetch(`${config.get("hosts.meliApi")}${config.get("endpoints.meliApiItems")}/${id}/description`)
                                            .then(res => res.json());

    const promises = await Promise.all([productPromise, productDescriptionPromise]);

    return {...promises[0], description: promises[1].plain_text};
};