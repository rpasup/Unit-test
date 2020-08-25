import data from './productdata.json';

export const getAllProducts = () => {
    return data && data.products;
}