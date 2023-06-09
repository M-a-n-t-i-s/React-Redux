import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import { logout, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends  React.Component{


    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps =(state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
)

export default connect(mapStateToProps,{setAuthUserData,  logout})(HeaderContainer);
// Email: free@samuraijs.com
// Password: free