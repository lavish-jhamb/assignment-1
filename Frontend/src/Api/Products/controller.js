import ApiClient from "../Client";

export const productController = {
    getProducts: async () => {
        try{
            const response = await ApiClient.get('/products');
            return response;
        }catch(error){
            throw error;
        }
    },
};