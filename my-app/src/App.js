import './App.css';
import NavBar from "./components/Navbar/Navbar";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy (() => import ("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(()=> import ("./components/Profile/ProfileContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized) {return <Preloader />}
        return (


            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<div><Preloader /></div>}>
                    <Routes>

                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        {/*<Route path="/profile" element={<ProfileContainer/>}>*/}
                        {/*    <Route path=":userId"*/}
                        {/*           element={<ProfileContainer/>}/>*/}
                        {/*</Route>*/}
                        <Route path='/users/*' element={<UsersContainer/>}/>
                        <Route path='/login' element={<LoginPage/>}/>

                    </Routes>
                    </React.Suspense>
                </div>

            </div>


        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})




let AppContainer = compose(withRouter,
    connect(mapStateToProps,{initializeApp})
)
(App);
const MainApp = (props) => {
    return <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
}

export  default MainApp