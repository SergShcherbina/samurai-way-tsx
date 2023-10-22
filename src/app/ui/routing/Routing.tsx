import React, {Suspense} from 'react';
import {Redirect, Route} from "react-router-dom";
import {DialogsContainer} from "../../../Component/dialogs/ui/DialogsContainer";
import {News} from "../../../Component/news/ui/News";
import {Music} from "../../../Component/music/ui/Music";import {ConnectProfileContainer} from "../../../Component/profile/ui/ProfileContainer ";
import {Spinner} from "../../../assets/spinner/Spinner";
import {LoginConnect} from "../../../Component/login/ui/LoginConnect";

const ConnectUsers = React.lazy(() => import('../../../Component/users/ui/ConnectUsers')
    .then(({ConnectUsers}) => ({default: ConnectUsers})));

export const Routing = () => {
    return (
        <>
            <Route exact path={"/profile/:userId?"} render={() => <ConnectProfileContainer/>}/>
            <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
            <Route path={"/message"} render={() => <DialogsContainer/>}/>
            <Route path={"/users"} render={() => {
                    return <Suspense fallback={ <Spinner/>}> <ConnectUsers/> </Suspense>}}/>
            <Route path={"/news"} component={News}/>
            <Route path={"/music"} component={Music}/>
            <Route path={"/login"} component={LoginConnect}/>
        </>
    );
};
