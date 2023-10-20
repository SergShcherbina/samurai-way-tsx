import { usersAPI } from "../../../api/api";
import { Dispatch } from "redux";
import {AppDispatchType} from "../../../app/model/store";

const initialState: usersState = {
  users: [],
  pageSize: 10,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  disableBtnFollow: [],
  friends: []
};

export const usersReducer = (state: usersState = initialState, action: ActionType): usersState => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.userId ? { ...user, followed: !user.followed } : user)),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.userId ? { ...user, followed: !user.followed } : user)),
      };
    case "SET-USERS":
      return {
        ...state,
        users: action.users,
      };
    case "SET-CURRENT-PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "SET-TOTAL-USERS-COUNT":
      return {
        ...state,
        totalItemsCount: action.totalItemsCout,
      };
    case "SET-FETCHING":
      return {
        ...state,
        isFetching: action.loading,
      };
    case "DISABLE-BTN-FOLLOW":
      return {
        ...state,
        disableBtnFollow: action.loading
          ? [...state.disableBtnFollow, action.userId]
          : state.disableBtnFollow.filter((id) => id !== action.userId),
      };
    case "SET-FRIENDS" :
      return {
        ...state, friends: action.users.filter(el=> el.followed)
      }
    default:
      return state;
  }
};

export const followSuccess = (userId: number) => {
  return {
    type: "FOLLOW",
    userId,
  } as const;
};
export const unFollowSuccess = (userId: number) => {
  return {
    type: "UNFOLLOW",
    userId,
  } as const;
};
export const setUsers = (users: UserType[]) => {
  return {
    type: "SET-USERS",
    users,
  } as const;
};
export const setCurrentPage = (pageNumber: number) => {
  return {
    type: "SET-CURRENT-PAGE",
    currentPage: pageNumber,
  } as const;
};
export const settotalItemsCout = (totalItemsCout: number) => {
  return {
    type: "SET-TOTAL-USERS-COUNT",
    totalItemsCout: totalItemsCout,
  } as const;
};
export const setFetching = (loading: boolean) => {
  return {
    type: "SET-FETCHING",
    loading,
  } as const;
};
export const toggleDisableBtnFollow = (loading: boolean, userId: number) => {
  return {
    type: "DISABLE-BTN-FOLLOW",
    userId,
    loading,
  } as const;
};

const setFriendsAC = (users: UserType[]) => {
  return {
    type: "SET-FRIENDS",
    users
  } as const
}

//создаем сан-крейтoр
export const getUsersTC = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch) => {
    dispatch(setFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI
      .getUsers(currentPage, pageSize)
      .then((response) => {
        dispatch(setUsers(response.items));
        dispatch(settotalItemsCout(response.totalCount));
      })
      .catch((err) => {
        console.log("ОШИБКА getUsers: ", err);
      })
      .finally(() => {
        dispatch(setFetching(false));
      });
  };
};
export const follow = (userId: number) => {
  return (dispatch: AppDispatchType) => {
    //диспатчим loading:true и userId для добавления в disableBtnFollow
    dispatch(toggleDisableBtnFollow(true, userId));
    usersAPI
      .followUser(userId)
      .then((response) => {
        if (response.resultCode === 0) {
          dispatch(followSuccess(userId));
          dispatch(getMyFriendsTC())
        }
      })
      .catch((err) => {
        console.log("ОШИБКА FOLLOW: ", err);
      })
      .finally(() => {
        //диспатчим loading:false и userId для удаления в disableBtnFollow
        dispatch(toggleDisableBtnFollow(false, userId));
      });
  };
};
export const unFollow = (userId: number) => {
  return (dispatch: AppDispatchType) => {
    dispatch(toggleDisableBtnFollow(true, userId));
    usersAPI
      .unFollowUser(userId)
      .then((response) => {
        if (response.resultCode === 0) {
          dispatch(unFollowSuccess(userId));
          dispatch(getMyFriendsTC())
        }
      })
      .catch((err) => {
        console.log("ОШИБКА UNFOLLOW: ", err);
      })
      .finally(() => {
        dispatch(toggleDisableBtnFollow(false, userId));
      });
  };
};

export const getMyFriendsTC = () => {
  return (dispatch: Dispatch) => {
    usersAPI.getAllUsers()
        .then(res => {
          dispatch(setFriendsAC(res.items))
        })
        .catch(err=> {
          alert('getMyFriendsTC:')
        })
  }
}
export type usersState = {
  users: UserType[];
  pageSize: number;
  totalItemsCount: number;
  currentPage: number;
  isFetching: boolean;
  disableBtnFollow: number[];
  friends: UserType[]
};
export type UserType = {
  name: string;
  id: number;
  photos: PhotoType;
  status: string;
  followed: boolean;
};
export type PhotoType = {
  small: string;
  large: string;
};

type FollowAT = ReturnType<typeof followSuccess>;
type UnFollowAT = ReturnType<typeof unFollowSuccess>;
type SetUsersAT = ReturnType<typeof setUsers>;
type SetCurrentPageAT = ReturnType<typeof setCurrentPage>;
type SetTotalItemsCountAT = ReturnType<typeof settotalItemsCout>;
type SetFetchingAT = ReturnType<typeof setFetching>;
type ToggleDisableBtnFollowType = ReturnType<typeof toggleDisableBtnFollow>;
type SetFriendsAT = ReturnType<typeof setFriendsAC>

type ActionType =
    | FollowAT
    | SetUsersAT
    | UnFollowAT
    | SetCurrentPageAT
    | SetTotalItemsCountAT
    | SetFetchingAT
    | ToggleDisableBtnFollowType
    | SetFriendsAT;
