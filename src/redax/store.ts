import { applyMiddleware, combineReducers, createStore } from "redux";
import { profileReducer } from "../Component/Profile/model/profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { appReducer } from "./app-reducer";

let rootReducer = combineReducers({
  app: appReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});
export type AppStateType = ReturnType<typeof rootReducer>;

//вторым параметром добавляем middleware, без него не заработают thunk
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// window.store = store
