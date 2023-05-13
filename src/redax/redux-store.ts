import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer} from 'redux-form'             //импортируем инкапсурированный редюсер и переиминовываем в formReducer


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer                                          //комбайним в стор
});
export type AppStateType = ReturnType <typeof rootReducer>;         //типизпция state

//вторым параметром добавляем middleware, без него не заработают thunk
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// window.store = store