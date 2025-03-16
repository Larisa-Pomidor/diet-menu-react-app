import { createStore } from "easy-peasy";
import calendarModel from "./slices/calendarSlice";
import productModel from "./slices/productSlice";
import symptomModel from "./slices/symptomSlice";

const store = createStore({
    calendarModel,
    productModel,
    symptomModel
});

export default store;