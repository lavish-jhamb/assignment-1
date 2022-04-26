import ApiClient from "../Client";

export const authController = {
    register: async (contact) => {
        try{
            const response = await ApiClient.post('/register',{contact});
            return response;
        }catch(error){
            throw error;
        }
    },

    login: async(contact) => {
        try{
            const response = await ApiClient.post('/login',{contact});
            return response;
        }catch(error){
            throw error;
        }
    }
};