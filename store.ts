import {configureStore} from '@reduxjs/toolkit';
import {biglistReducer} from './src/redux/reducers/biglist/biglist';
import {apiMiddleware} from './src/redux/middlewares/core/api';
import {biglistMiddleware} from './src/redux/middlewares/feature/biglist';

const coreMiddlewares = [
    apiMiddleware,
];

const featureMiddlewares = [
    biglistMiddleware,
];

const store = configureStore({
    reducer: {
        biglist: biglistReducer,
    },
    middleware: [...featureMiddlewares, ...coreMiddlewares],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
