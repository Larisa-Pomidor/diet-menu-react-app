import { action, thunk } from "easy-peasy";

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_BASE_URL = 'http://localhost:8080';

const calendarModel = {
    dayById: null,
    days: [],
    loading: true,
    status: null,

    setDayById: action((state, payload) => {
        state.dayById = payload;
    }),
    setDays: action((state, payload) => {
        state.days = payload;
    }),
    updateDayByIdInState: action((state, payload) => {
        state.dayById = payload;
    }),
    removeDaySymptomInState: action((state, payload) => {
        state.dayById = state.dayById.symptoms.filter(symptom => symptom.id !== payload);
        state.days = state.days.map(day => ({
            ...day,
            symptoms: day.symptoms.filter(symptom => symptom.id !== payload)
        }));
    }),
    removeDayProductInState: action((state, payload) => {
        state.dayById = state.dayById.products.filter(product => product.id !== payload);
        state.days = state.days.map(day => ({
            ...day,
            products: day.products.filter(product => product.id !== payload)
        }));
    }),
    addDaySymptomInState: action((state, { id, symptom }) => {
        state.dayById.symptoms.push(payload);
        state.days = state.days.map(day =>
            day.id === id && day.symptoms.push(symptom)
        );
    }),
    addDayProductInState: action((state, { id, product }) => {
        state.dayById.products.push(payload);
        state.days = state.days.map(day =>
            day.id === id && day.products.push(product)
        );
    }),
    setLoading: action((state, payload) => {
        state.loading = payload;
    }),
    setStatus: action((state, payload) => {
        state.status = payload;
    }),

    fetchDayById: thunk(async (actions, id) => {
        actions.setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/days/${id}`);

            if (response.status === 204) {
                actions.setDayById({});
            } else {
                actions.setDayById(response.data);
            }
        } catch (error) {
            console.log(error)
            if (error.response) {
                actions.setStatus(error.response.message);
            } else {
                console.log(error);
            }
        } finally {
            actions.setLoading(false);
        }
    }),

    fetchDays: thunk(async (actions) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/days`);

            if (response.status === 204) {
                actions.setDays([]);
            } else {
                actions.setDays(response.data);
            }
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),

    updateDayById: thunk(async (actions, { id, updatedDay }) => {
        actions.setLoading(true);
        try {
            const response = await axios.put(`${API_BASE_URL}/days/${id}`, updatedDay);
            actions.updateDayByIdInState(response.data);
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),

    addDaySymptom: thunk(async (actions, { dayId, dataId }) => {
        actions.setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/days/${dayId}/symptom/${dataId}`);
            actions.addDaySymptomInState({ id, symptom: response.data });
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),

    addDayProduct: thunk(async (actions, { dayId, dataId }) => {
        actions.setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/days/${dayId}/product/${dataId}`);
            actions.addDayProductInState({ id, product: response.data });
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),

    deleteDaySymptomById: thunk(async (actions, id) => {
        actions.setLoading(true);
        try {
            await axios.delete(`${API_BASE_URL}/days/symptom/${id}`);
            actions.removeDaySymptomInState(id);
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),

    deleteDayProductById: thunk(async (actions, id) => {
        actions.setLoading(true);
        try {
            await axios.delete(`${API_BASE_URL}/days/product/${id}`);
            actions.removeDayProductInState(id);
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),

    menuList: computed(state => {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - dayOfWeek);
        const endOfPeriod = new Date(startOfWeek);
        endOfPeriod.setDate(startOfWeek.getDate() + 27);

        return state.days.filter(day => {
            const dayDate = new Date(day.date);
            return dayDate >= startOfWeek && dayDate <= endOfPeriod;
        });
    })
};

export default calendarModel;
