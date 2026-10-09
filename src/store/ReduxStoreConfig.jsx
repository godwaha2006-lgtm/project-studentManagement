import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice.jsx"
const store = configureStore({
    reducer: {
        user: Slice
    }
})
export default store;