import React, {Suspense} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {DialogsContainer} from "../../../pages/dialogs/ui/dialogs/DialogsContainer";
import {Gallery} from "../../../pages/gallery/ui/Gallery";
import {Music} from "../../../pages/music/ui/Music";
import {ConnectProfileContainer} from "../../../pages/profile/ui/ProfileContainer ";
import {Spinner} from "../../../component/spinner/Spinner";
import {LoginConnect} from "../../../pages/auth/ui/LoginConnect";
import styled from "styled-components";
import {NotFound} from "../../../pages/page-not-found/NotFound";

const ConnectUsers = React.lazy(() => import('../../../pages/users/ui/ConnectUsers')
    .then(({ConnectUsers}) => ({default: ConnectUsers})));

export const Routing = () => {
    return (
        <ContentBlock>
            <Switch>
                <Route path={"/profile/:userId?"} render={() => <ConnectProfileContainer/>}/>
                <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
                <Route path={"/message"} render={() => <DialogsContainer/>}/>
                <Route path={"/users"} render={() => {
                    return <Suspense fallback={ <Spinner/>}> <ConnectUsers/> </Suspense>}}/>
                <Route path={"/gallery"} component={Gallery}/>
                <Route path={"/music"} component={Music}/>
                <Route path={"/login"} component={LoginConnect}/>
                <Route path={"*"} component= {NotFound}/>
            </Switch>
        </ContentBlock>
    );
};

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
`