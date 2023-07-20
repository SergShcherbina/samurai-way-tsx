import React from 'react';
import {Route} from "react-router-dom";
import {DialogsContainer} from "../../../Component/dialogs/ui/DialogsContainer";
import {News} from "../../../Component/news/ui/News";
import {Music} from "../../../Component/music/ui/Music";
import {Setting} from "../../../Component/setting/ui/Setting";
import {LoginConnect} from "../../../Component/login/ui/LoginConnect";
import {ConnectProfileContainer} from "../../../Component/profile/ui/ProfileContainer ";
import {ConnectUsers} from "../../../Component/users/ui/ConnectUsers";

export const Routing = () => {
    return (
        <>
            <Route exact path={"/profile/:userId?"} render={() => <ConnectProfileContainer/>}/>
            <Route path={"/message"} render={() => <DialogsContainer/>}/>
            <Route path={"/users"} render={() => <ConnectUsers/>}/>
            <Route path={"/news"} component={News}/>
            <Route path={"/music"} component={Music}/>
            <Route path={"/setting"} component={Setting}/>
            <Route path={"/login"} component={LoginConnect}/>
        </>
    );
};
