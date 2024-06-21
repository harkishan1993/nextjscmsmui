import { configureStore } from "@reduxjs/toolkit"
import { useSelector as useAppSelector, useDispatch as useAppDispatch, TypedUseSelectorHook} from "react-redux"
import { persistReducer, persistStore } from "redux-persist"
import {rootPersistConfig, rootReducer} from "./rootReducer"

const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        })
})

const persister = () => persistStore(store)

const { dispatch, getState } = store
type SelectHook = ReturnType< typeof getState >
type DispatchHook = typeof dispatch
const useDispatch = () => useAppDispatch<DispatchHook>();
const useSelector: TypedUseSelectorHook<SelectHook> = useAppSelector;

export { store, persister, dispatch, useDispatch, useSelector }