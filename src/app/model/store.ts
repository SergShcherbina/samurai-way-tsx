import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import { profileReducer } from "../../Component/Profile/model/profile-reducer";
import { dialogsReducer } from "../../Component/dialogs/model/dialogs-reducer";
import { sidebarReducer } from "../../redax/sidebar-reducer";
import { usersReducer } from "../../redax/users-reducer";
import { authReducer } from "../../redax/auth-reducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { appReducer } from "./app-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';  //для работы с расширением REDUX_DEV_TOOLS

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
export type AppDispatchType = ThunkDispatch<AppStateType, any, AnyAction>;

//вторым параметром добавляем middleware, без него не заработают thunk;
export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// window.store = store
