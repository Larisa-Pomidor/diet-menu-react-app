import axios from "axios";
import { action, thunk } from "easy-peasy";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
//const API_BASE_URL = 'http://localhost:8080';

const productModel = {
    products: [],
    loading: true,
    status: null,

    setProducts: action((state, payload) => {
        state.products = payload;
    }),
    setLoading: action((state, payload) => {
        state.loading = payload;
    }),
    setStatus: action((state, payload) => {
        state.status = payload;
    }),

    fetchProducts: thunk(async (actions) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/products`);

            if (response.status === 204) {
                actions.setProducts([]);
            } else {
                actions.setProducts(response.data);
            }
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),
};

export default productModel;
