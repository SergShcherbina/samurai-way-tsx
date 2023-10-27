import React, {createRef, FC, MutableRefObject, useEffect, useRef} from "react";
import {Friend} from "./friend/Friend";
import styled, {css} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserFriends} from "@fortawesome/free-solid-svg-icons";
import {FormSearchType, SearchFriendForm} from "./friend/SearchFriendForm";
import {FriendsMSTPType} from "./FriendsContainer";
import spinner from '../../../assets/img/loading.gif'


type PropsType = {
    getFriends: (page: number, value: string, isSearch: boolean) => void
    isFetching: boolean
    friendsCount: number
} & FriendsMSTPType;

export const Friends: FC<PropsType> = (props) => {
    const lastFriend: any = createRef();
    const observerLoader: MutableRefObject<IntersectionObserver | null> = useRef(null);
    const count = useRef(2) //Не setState т.к. нет необходимости рендерить компонент

console.log('render Friends', props.isFetching)

    let actionInSight = (entries: IntersectionObserverEntry[], observer: any) => {
        if (entries[0].isIntersecting  && !props.isFetching && props.friends.length < props.friendsCount) {
            props.getFriends( count.current, '', false);
            count.current++
            observer.disconnect()           //отключаем обработчик так как меняем на новый элемент
        }
    };

    observerLoader.current =  new IntersectionObserver(actionInSight, {threshold: 0.5}) //Создаём объект-наблюдатель

    useEffect ( () => {
        //Если последний элемент существует, устанавливаем его как наблюдаемый элемент
        if(lastFriend.current){
            observerLoader.current?.observe(lastFriend.current)
        }
    }, [lastFriend]);

    const onSubmit = (value: FormSearchType) => {
        props.getFriends(1, value.searchValue, true)
    }

    return (
        <FriendsRoot loading={props.isFetching ? 'true' : 'false'} aria-disabled={true}>
            <span><FontAwesomeIcon icon={faUserFriends} size={'1x'}/>Friends {props.friendsCount}</span>
            <SearchFriendForm onSubmit={onSubmit}/>
            {
                props.friends
                    .map((friend, i, arr) => {
                        //если компонент последний - вешаем на него ref
                        if (arr.length === i + 1) {
                            return <Friend key={friend.id}
                                           friend={friend}
                                           ref={lastFriend}
                            />
                        }
                        return <Friend key={friend.id} friend={friend}/>
                    })
            }
        </FriendsRoot>
    );
};


const FriendsRoot = styled.div<{ loading: string }>`
  background-color: var(--color-bloks);
  padding: var(--padding-blocks);
  border-radius: 10px;
  box-shadow: var(--box-shadow-blocks);
  max-height: 550px;
  overflow: auto;

  position: sticky;
  top: 5px;

  & > span {
    display: flex;
    gap: 10px;
    align-items: center;
    font-weight: bold;
    color: var(--main-color)
    
    ${props => props.loading === 'true' && css `
    //overflow: hidden;

    &:before {
      content: 'loading ... ';
      position: absolute;
      bottom: 50%;
      left: 35%;
      padding: 10px;
      background-color: red;
    }
  `}
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--main-color);
    background-image: -webkit-gradient(linear, 0 0, 0 100%,
    color-stop(.5, rgb(192, 192, 192)),
    color-stop(.5, transparent), to(transparent));
  }

  & > svg:last-child {
    display: none;
    width: 100%;
    margin: 10px auto 0;
    transition: all 0.3s;

    &:hover {
      transform: translateY(2px);

      & path {
        fill: var(--main-color);
      }

    }
  }
`