import axios from "axios";
import { action, computed, thunk } from "easy-peasy";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
//const API_BASE_URL = 'http://localhost:8080';

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
        state.dayById.note = payload.note;
        state.dayById.cheated = payload.cheated;
    }),
    removeDaySymptomInState: action((state, { dayId, dataId }) => {
        state.dayById.symptoms = state.dayById.symptoms.filter(symptom => symptom.id !== dataId);
        state.days = state.days.map(day => day.id === dayId ?
            { ...day, symptoms: day.symptoms.filter(symptom => symptom.id !== dataId) }
            : day
        );
    }),
    removeDayProductInState: action((state, { dayId, dataId }) => {
        state.dayById.products = state.dayById.products.filter(product => product.id !== dataId);
        state.days = state.days.map(day => day.id === dayId ?
            { ...day, products: day.products.filter(product => product.id !== dataId) }
            : day
        );
    }),
    addDaySymptomInState: action((state, { id, symptom }) => {
        state.dayById.symptoms.push(symptom);
        state.days = state.days.map(day =>
            day.id === id && day.symptoms.push(symptom)
        );
    }),
    addDayProductInState: action((state, { id, product }) => {
        state.dayById.products.push(product);
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
            actions.setDayById();

            const response = await axios.get(`${API_BASE_URL}/calendar/${id}`);

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
            const response = await axios.get(`${API_BASE_URL}/calendar`);

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
            const response = await axios.put(`${API_BASE_URL}/calendar/${id}`, updatedDay);
            actions.updateDayByIdInState(response.data);
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),

    addDaySymptom: thunk(async (actions, { dayId, dataId }) => {
        actions.setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/calendar/${dayId}/symptom/${dataId}`);
            actions.addDaySymptomInState({ id: dataId, symptom: response.data });
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),

    addDayProduct: thunk(async (actions, { dayId, dataId }) => {
        actions.setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/calendar/${dayId}/product/${dataId}`);
            actions.addDayProductInState({ id: dataId, product: response.data });
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),

    deleteDaySymptomById: thunk(async (actions, { dayId, dataId }) => {
        actions.setLoading(true);
        try {
            await axios.delete(`${API_BASE_URL}/calendar/${dayId}/symptom/${dataId}`);
            actions.removeDaySymptomInState({ dayId, dataId });
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),

    deleteDayProductById: thunk(async (actions, { dayId, dataId }) => {
        actions.setLoading(true);
        try {
            await axios.delete(`${API_BASE_URL}/calendar/${dayId}/product/${dataId}`);
            actions.removeDayProductInState({ dayId, dataId });
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),

    generateMenu: thunk(async (actions, _) => {
        actions.setLoading(true);
        try {
            await axios.post(`${API_BASE_URL}/random`);
        } catch (error) {

        } finally {
            actions.setLoading(false);
        }
    }),

    menuList: computed(state => {
        const today = new Date();
        let dayOfWeek = today.getDay();

        dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - dayOfWeek);

        const endOfPeriod = new Date(startOfWeek);
        endOfPeriod.setDate(startOfWeek.getDate() + 27);

        return state.days
            .filter(day => {
                const dayDate = new Date(day.date);
                return dayDate >= startOfWeek && dayDate <= endOfPeriod;
            })
            .sort((a, b) => new Date(a.date) - new Date(b.date));
    }),

    groupedCalendar: computed(state => {
        if (state.days) return state.days.reduce((acc, day) => {
            const date = new Date(day.date);
            const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

            if (!acc[yearMonth]) {
                acc[yearMonth] = [];
            }

            acc[yearMonth].push(day);
            acc[yearMonth].sort((a, b) => new Date(a.date) - new Date(b.date));
            return acc;
        }, {})
    }),
};

export default calendarModel;
