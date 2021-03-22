import logo from './logo.svg';
import './App.css';
import Header from './components/header/Headercomp';
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/cprofile/Cprofile";
import React from "react";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/navbar/Friends/Friends";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar /*state={props.state.sideBar}*//>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={()=> <UsersContainer />}/>

                {/*<Route path='/friends' render={()=> <Friends state={props.state.friendsPages.friends}/>}/>*/}
            </div>
        </div>
    )
}


export default  App;
