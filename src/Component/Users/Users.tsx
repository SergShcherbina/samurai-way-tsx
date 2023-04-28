import React, { MouseEvent } from 'react';
import s from './users.module.css'
import avaUser from '../assets/img/avatarUser.png'
import {toggleDisableBtnFollow, UserType} from '../redax/users-reducer';
import { Spinner } from '../assets/spinner/Spinner';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { getAPI } from '../api/api';

type UsersType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFething: boolean,
    disableBtnFollow: number[],
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    changeCurrentPage: (pageNumber: number) => void,
    setFething: (loading: boolean) => void
    toggleDisableBtnFollow: (loading: boolean, userId: number) => void
}

export const Users = (props: UsersType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pagination = (firstPage: number) => {
        let page = firstPage + 9 < pagesCount ? firstPage + 9 : pagesCount

        let arrPage = [];
        for (let i = firstPage; i <= page; i++) {
            arrPage.push(i)
        }
        return arrPage
    }

    let pagePagination = pagination(props.currentPage)
    console.log(props.disableBtnFollow)
    return (
        <div className={s.wrapperUsers}>
            <div>
                <button
                    //дизейблим первая страница = 1 
                    disabled={pagePagination[0] === 1}
                    onClick={() => props.changeCurrentPage(pagePagination[0] - 1)}
                > -1
                </button>
                {/* мапим список пагинации и добавляем класс активности по условию */}
                {pagePagination.map(p => <span
                    key={p}
                    onClick={() => props.changeCurrentPage(p)}
                    className={props.currentPage === p ? s.selectedPage : ''} > {p}
                </span>)}
                <button
                    //дизейблим если активная страница совпадает с последней страницей 
                    disabled={props.currentPage >= pagesCount}
                    onClick={() => props.changeCurrentPage(pagePagination[0] + 1)} > +1
                </button>
            </div >


            {props.isFething
                ? <Spinner />
                :
                props.users.map(user => <div key={user.id} className={s.userItem}>
                    <div className={s.userIcon}>
                        <div>
                            <NavLink to={`/profile/${user.id}`} >
                                <img style={{ width: '40px' }} src={user.photos.small ? user.photos.small : avaUser} />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button
                                    //дизейблим кнопку если в полученном массиве id совпадает с текущим
                                    disabled={props.disableBtnFollow.some(id => id === user.id)}
                                    onClick={() => {
                                        //диспатчим loading:true и userId для добавления в disableBtnFollow
                                        props.toggleDisableBtnFollow(true, user.id)
                                        getAPI.followUser(user.id)
                                            .then(response => {
                                                if(response.resultCode === 0){
                                                    props.follow(user.id)
                                                }
                                            })
                                            .catch((err) => {
                                                console.log('ОШИБКА FOLLOW')
                                            }).finally(()=> {
                                            //диспатчим loading:false и userId для удаления в disableBtnFollow
                                            props.toggleDisableBtnFollow(false, user.id)
                                        })
                                    }}>Unfollow</button>
                                : <button
                                    disabled={props.disableBtnFollow.some(el=>el === user.id)}
                                    onClick={() => {
                                        props.toggleDisableBtnFollow(true, user.id)
                                        getAPI.unFollowUser(user.id)
                                            .then(response => {
                                                if(response.resultCode === 0){
                                                    props.unFollow(user.id)
                                                }
                                            })
                                            .catch((err) => {
                                                console.log('ОШИБКА UNFOLLOW')
                                            }).finally(()=> {
                                            props.toggleDisableBtnFollow(false, user.id)
                                    })
                                }}> Follow  </button>}
                        </div>
                    </div>
                    <div className={s.userContent}>
                        <div className={s.userNameWrapper}>
                            <div>{user.name}
                                <div>{user.status}</div>
                            </div>
                            <div className={s.userNameWrapper}>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>

    )
}
