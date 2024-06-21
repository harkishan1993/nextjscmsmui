import { combineReducers } from "redux"
import createWebStorage from "redux-persist/lib/storage/createWebStorage"
import appReducer from "./slice/app"
import themeReducer from "./slice/theme"
import dndReducer from "./slice/dnd";


const createNoopStorage = () => {
    return {
      getItem(_key: string) {
        return Promise.resolve(null);
      },
      setItem(_key: string, value: any) {
        return Promise.resolve(value);
      },
      removeItem(_key: string) {
        return Promise.resolve();
      },
    };
  };

  const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootPersistConfig = {
    key: "rootMui",
    storage,
    keyPrefix: "redux-"
    //   whitelist: [],
    //   blacklist: [],
}

const rootReducer = combineReducers({
    app: appReducer,
    theme: themeReducer,
    dnd : dndReducer
})
export type RootState = ReturnType<typeof rootReducer>;
export {rootPersistConfig, rootReducer}