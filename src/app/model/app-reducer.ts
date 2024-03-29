
import {AppDispatchType} from "./store";
import {authMeTC} from "../../pages/auth/model/auth-actions";

const initialState = {
  initialized: false,
};

type InitialStateType = typeof initialState;
type AppActionType = ReturnType<typeof initAppAC>;

export const appReducer = (state: InitialStateType = initialState, action: AppActionType) => {
  switch (action.type) {
    case "APP-INIT":
      return { ...state, initialized: action.init };
    default:
      return state;
  }
};

const initAppAC = (init: boolean) =>({
    type: "APP-INIT",
    init,
  }) as const;

export const initAppTC = () => (dispatch: AppDispatchType) => {
  const promiseAuthUser = dispatch(authMeTC()); //из санки authUser возвращаем promise
  Promise.all([promiseAuthUser]).then(() => {
    //и только после его выполнения dispatch init true в state
    dispatch(initAppAC(true)); //чтобы показывать спиннер до проверки инициализации
  });
};
