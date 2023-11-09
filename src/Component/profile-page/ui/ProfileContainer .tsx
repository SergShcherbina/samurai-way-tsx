import React, {ComponentType} from "react";
import {ProfilePage} from "./ProfilePage";
import {AppStateType} from "../../../app/model/store";
import {connect} from "react-redux";
import {getStatusTC, replaceAvatarTC, setUserProfileTC, updateStatusTC} from "../model/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../common/hoc/withAuthRedirect";
import {compose} from "redux";

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
};

export class ProfileContainer extends React.Component<PropsProfileContainerType> {
    refreshProfile =  () => {
        let userId = Number(this.props.match.params.userId); //получили за счет withRouter с query параметров url
        if (!userId) userId = this.props.authUserId; //подставляю свой userId с сервера для начальной стр
        this.props.setUserProfile(userId); //передаем id в thunk для запроса
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return <ProfilePage isMyPage={!this.props.match.params.userId} {...this.props} />;
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.userId,
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
            updateStatus: updateStatusTC
        }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);
