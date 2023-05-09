import { connect } from "react-redux";
import { Dispatch } from "redux";
//import { RootState } from "app/store";
import ViewModel from "./Model";
import { changeSecurityFields } from "../../actions/security";
import { changeUserFields, getUserId } from "../../actions/user";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    isLog: state.security.isLog,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    userName: state.user.userName,
    id: state.user.id

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeSecurityFields: (field: string, value: any) => {
        dispatch(changeSecurityFields(field, value));
    },
    getUserId: (id: string) => {
        dispatch(getUserId(id));
    },
    changeUserField: (field: string, value: any) => {
        dispatch(changeUserFields(field, value))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
