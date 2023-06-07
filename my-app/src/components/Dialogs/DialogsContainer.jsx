
import '../../index.js';
import {sentNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";





let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let  mapDispatchProps =(dispatch)=> {
    return {
        sentNewMessage: (text)=>{
            dispatch(sentNewMessageActionCreator(text))
        }
    }
}
let AuthNavigateComponent = withAuthNavigate(Dialogs);






export default compose(
    connect(mapStateToProps,mapDispatchProps),
    withAuthNavigate
)(Dialogs);