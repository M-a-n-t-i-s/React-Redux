import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId= this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId )
        this.props.getStatus(userId )


        // profileAPI.getProfile( userId!==undefined ? userId: 2)//userId должен вместо 2, но не работает
        //     .then(responce => {
        //         this.props.setUserProfile(responce);
        //     });

    }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let params = useParams();
        return (
            <Component
                {...props}
                router={{params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthNavigate
)(ProfileContainer);