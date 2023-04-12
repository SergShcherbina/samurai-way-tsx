import React, {MouseEvent} from 'react';
import {UsersType} from "../redax/users-reducer";
import s from './users.module.css'
import axios from "axios";
import avaUser from '../assets/img/avatarUser.png'

type UsersComponentType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UsersType[]) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
}

export class UsersClass extends React.Component<UsersComponentType>{
    constructor(props: UsersComponentType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)  
                .then(response => {
                this.props.setUsers(response.data.items)                           //сетаем в state.users
                // this.props.setTotalUsersCount(response.data.totalCount)
            });
    }
    changeCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)  
        .then(response => {
        this.props.setUsers(response.data.items)                           
    });
    }

    pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);   //общее количество страниц    

    pagination = (firstPage : number) => {
        let page = firstPage + 9 <  this.pagesCount ? firstPage + 9 : this.pagesCount

        let arrPage = [];
        for(let i = firstPage; i <= page ; i++){
            arrPage.push(i)
        }
        return arrPage
    }

    render () {
        //высчитываем и отрисовываем кол-во страниц в пагинации
        let pagePagination = this.pagination(this.props.currentPage)    //формируем массив страниц отталкиваясь от первой
        console.log(pagePagination[pagePagination.length-1])
        return (
            <div className={s.wrapperUsers}>
                <div>
                    <button 
                        //дизейблим первая страница = 1 
                        disabled={pagePagination[0] === 1 }
                        onClick={()=>this.changeCurrentPage(pagePagination[0] - 1 )}
                        > -1 
                    </button>
                    {/* мапим список пагинации и добавляем класс активности по условию */}
                    {pagePagination.map(p => <span 
                        key={p} 
                        onClick={()=>this.changeCurrentPage(p)}
                        className={this.props.currentPage === p ? s.selectedPage : ''
                    } > {p} </span>)}
                    <button 
                        //дизейблим если активная страница совпадает с последней страницей 
                        disabled={this.props.currentPage >= this.pagesCount }
                        onClick={()=>this.changeCurrentPage(pagePagination[0] + 1)}
                        > +1 
                    </button>
                </div>

                {this.props.users.map(user => <div key={user.id} className={s.userItem}>
                    <div className={s.userIcon}>
                        <div>
                            <img  style={{width: '40px'}} src={user.photos.small ? user.photos.small : avaUser }/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => { this.props.follow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.unFollow(user.id) }}> Follow  </button> }
                        </div>
                    </div>
                    <div className={s.userContent}>
                        <div className={s.userNameWrapper}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div className={s.userNameWrapper}>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </div>
                    </div>
                </div>)}
            </div>
        );
    }
}

