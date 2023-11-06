import React, {Suspense} from 'react';
import {Redirect, Route} from "react-router-dom";
import {DialogsContainer} from "../../../Component/dialogs/ui/dialogs/DialogsContainer";
import {Gallery} from "../../../Component/gallery/ui/Gallery";
import {Music} from "../../../Component/music/ui/Music";import {ConnectProfileContainer} from "../../../Component/profile-page/ui/ProfileContainer ";
import {Spinner} from "../../../Component/spinner/Spinner";
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
            <Route path={"/gallery"} component={Gallery}/>
            <Route path={"/music"} component={Music}/>
            <Route path={"/login"} component={LoginConnect}/>
        </>
    );
};
