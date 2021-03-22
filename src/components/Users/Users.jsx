import React from 'react'
import s from './Users.module.css'

let Users = (props) => {
   if (props.users.length === 0){
       props.setUsers([ {
           id: 1,
           followed: true,
           photoUrl: 'https://artnow.ru/img/1272000/1272640.jpg',
           fullname: 'Vika',
           status: 'Im glamour kiss',
           location: {country: 'Belarus', city: 'Polotsk'}
       },
           {
               id: 2,
               photoUrl: 'https://artnow.ru/img/1272000/1272640.jpg',
               followed: true,
               fullname: 'Oleg',
               status: 'Hello bithch',
               location: {country: 'Belarus', city: 'Bobruisk'}
           },
           {
               id: 3,
               photoUrl: 'https://artnow.ru/img/1272000/1272640.jpg',
               followed: true,
               fullname: 'Iliya',
               status: 'homeless',
               location: {country: 'Belarus', city: 'Glusk'}
           },
           {
               id: 4,
               photoUrl: 'https://artnow.ru/img/1272000/1272640.jpg',
               followed: true,
               fullname: 'Maksim',
               status: 'Audi top',
               location: {country: 'Belarus', city: 'Bobruisk'}
           },
           {
               id: 5,
               photoUrl: 'https://artnow.ru/img/1272000/1272640.jpg',
               followed: false,
               fullname: 'Vlad',
               status: 'Iliya gey',
               location: {country: 'Belarus', city: 'Bobruisk'}
           },
           {
               id: 5,
               photoUrl: 'https://artnow.ru/img/1272000/1272640.jpg',
               followed: false,
               fullname: 'Vanya',
               status: 'Plz help me',
               location: {country: 'Russia', city: 'Moscow'}
           }])
   }



    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.img}>
                        <img src={u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>}
                            </div>
                            </span>
                    <span>
                            <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                            </span>
                            <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                            </span>
                            </span>
                </div>
            )
        }
    </div>


}

export default Users;