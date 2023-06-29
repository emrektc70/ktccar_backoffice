import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  changeAuthentificationFields,
  postLogin,
} from "../../actions/authentification";
import { RootState } from "../../store/store";
import ViewModel from "./Model";
import { changeSecurityFields } from "../../actions/security";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  password: state.authentication.password,
  email: state.authentication.email,
  isLog: state.security.isLog
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  postLogin: () => {
    dispatch(postLogin());
  },
  changeAuthentificationFields: (field: string, value: any) => {
    dispatch(changeAuthentificationFields(field, value));
  },
  changeSecurityFields: (field: string, value: any) => {
    dispatch(changeSecurityFields(field, value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
