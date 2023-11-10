import React, {ComponentType, useEffect} from "react";
import {ProfilePage} from "./ProfilePage";
import {AppStateType} from "../../../app/model/store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../common/hoc/withAuthRedirect";
import {compose} from "redux";
import {getStatusTC, replaceAvatarTC, setErrorAC, setUserProfileTC, updateStatusTC} from "../model/profile-actions";
import {toast, ToastContainer} from "react-toastify";

//типизация withRouter
type PropsProfileContainerType = RouteComponentProps<PatchParamsType> & ProfileContainerType;
type ProfileContainerType = MapStateToPropsProfileContainerType & MapDispatchToPropsProfileContainerType;
type PatchParamsType = { userId: string };
type MapStateToPropsProfileContainerType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsProfileContainerType = {
    setUserProfile: (userId: number) => void;
    getStatus: (userId: number) => void;
    updateStatus: (status: string) => void;
    replaceAvatar: (file: File) => void
    setError: (error: null) => void
};

export class ProfileContainer extends React.Component<PropsProfileContainerType> {
    refreshProfile = () => {
        let userId = Number(this.props.match.params.userId); //получили за счет withRouter с query параметров url
        if (!userId) userId = this.props.authUserId; //подставляю свой userId с сервера для начальной стр
        this.props.setUserProfile(userId); //передаем id в thunk для запроса
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
        if (this.props.errorMessage != prevProps.errorMessage) {
            toast.error(this.props.errorMessage)
        }
    };

    render() {
        return (
            <>
                <ProfilePage isMyPage={!this.props.match.params.userId} {...this.props} />
                <ToastContainer position={"top-center"} />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.userId,
        errorMessage: state.profilePage.errorMessage
    };
};

//compose комбинирует HOC, простая типизация<ComponentType>
//вместо mapDispatchToProps возвращаем {thunk1, thunk2}
export const ConnectProfileContainer = compose<ComponentType>(
    connect(mapStateToProps,
        {
            replaceAvatar: replaceAvatarTC,
            setUserProfile: setUserProfileTC,
            getStatus: getStatusTC,
            updateStatus: updateStatusTC,
            setError: setErrorAC,
        }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);
