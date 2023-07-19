import React from 'react';
import {Route} from "react-router-dom";
import {DialogsContainer} from "../../../Component/Dialogs/DialogsContainer";
import {UsersConnect} from "../../../Component/Users/UsersContainer";
import {News} from "../../../Component/News/News";
import {Music} from "../../../Component/Music/Music";
import {Setting} from "../../../Component/Setting/Setting";
import {LoginConnect} from "../../../Component/Login/LoginConnect";
import {ConnectProfileContainer} from "../../../Component/Profile/ui/ProfileContainer ";

export const Routing = () => {
    return (
        <>
            <Route exact path={"/profile/:userId?"} render={() => <ConnectProfileContainer />} />
            <Route path={"/message"} render={() => <DialogsContainer />} />
            <Route path={"/users"} render={() => <UsersConnect />} />
            <Route path={"/news"} component={News} />
            <Route path={"/music"} component={Music} />
            <Route path={"/setting"} component={Setting} />
            <Route path={"/login"} component={LoginConnect} />
        </>
    );
};
