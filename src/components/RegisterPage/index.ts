import { connect } from "react-redux";
import { Dispatch } from "redux";
import { changeRegisterFields, postRegister } from "../../actions/register";
import ViewModel from "./Model";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  firstName: state.register.firstName,
  passwordRegister: state.register.passwordRegister,
  emailRegister: state.register.emailRegister,
  lastName: state.register.lastName,
  phoneNumber: state.register.phoneNumber,
  username: state.register.username,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeRegisterFields: (field: string, value: any) => {
    dispatch(changeRegisterFields(field, value));
  },
  postRegister: () => {
    dispatch(postRegister());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
