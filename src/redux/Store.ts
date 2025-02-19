import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { TypeClassSlice } from './TypeClassSlice';

//persist config
const persistConfig = {
    key: 'root',
    storage,
    // whitelist: [''],
    // blacklist: [''],
};

//make root reducer
const rootReducer = combineReducers({
    typeClass: TypeClassSlice.reducer,
});

//cover rootReducer by persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//create store
export const StoreReducer = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

// create persisted store
export const Persistor = persistStore(StoreReducer);
