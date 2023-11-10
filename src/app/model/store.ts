import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "../../pages/profile/model/profile-reducer";
import {dialogsReducer} from "../../pages/dialogs/model/dialogs-reducer";
import {usersReducer} from "../../pages/users/model/users-reducer";
import {authReducer} from "../../pages/auth/model/auth-reducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {galleryReducer} from "../../pages/gallery/model/gallery-reducer";
import {reducerMusic} from "../../pages/music/model/reducer-music";
import {getLocalStorage, setLocalStorage} from "../../utils/localStorage/localStorage";

const rootReducer = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    gallery: galleryReducer,
    form: formReducer,
    music: reducerMusic,
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = ThunkDispatch<AppStateType, any, AnyAction>;

//вторым параметром добавляем middleware, без него не заработают thunk;
export const store = createStore(
    rootReducer,
    getLocalStorage(), //данные из localStorage
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

store.subscribe(() => {
    setLocalStorage()
});

// window.store = store