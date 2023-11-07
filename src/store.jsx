import { configureStore } from '@reduxjs/toolkit';
import mainMiddleware from './middlewares/index';
import mainReducer from './reducers/index';

const store = configureStore({
    reducer: {
        main: mainReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false,
        }).concat(mainMiddleware),
})

// console.log('store ', store.getState());


export default store;