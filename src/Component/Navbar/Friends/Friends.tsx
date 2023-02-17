import React from 'react';
import styled from "styled-components";
import {EveryFriend} from "./EveryFriend/EveryFriend";
import {FriendType} from "../Navbar";

export const Friends = (props: FriendType) => {

    const viewFriends = props.friendData
        .map((el, i) => {
            return <EveryFriend name={el.name} id={el.id} src={el.src}/>
        })

    return (
        <div>
            <div style={{color: '#fff', marginTop: '25px'}}>Friends</div>
            <BlockFriends>
                {
                    viewFriends
                }

            </BlockFriends>
        </div>
    );
};

const BlockFriends = styled.div `
  margin-top: 10px;
  display: flex;
  justify-content: space-between;  
`