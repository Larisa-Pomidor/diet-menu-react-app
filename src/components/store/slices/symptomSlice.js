import axios from "axios";
import { action, thunk } from "easy-peasy";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
//const API_BASE_URL = 'http://localhost:8080';

const symptomModel = {
    symptoms: [],
    loading: true,
    status: null,

    setSymptoms: action((state, payload) => {
        state.symptoms = payload;
    }),
    setLoading: action((state, payload) => {
        state.loading = payload;
    }),
    setStatus: action((state, payload) => {
        state.status = payload;
    }),

    fetchSymptoms: thunk(async (actions) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/symptoms`);

            if (response.status === 204) {
                actions.setSymptoms([]);
            } else {
                actions.setSymptoms(response.data);
            }
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),
};

export default symptomModel;
