import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  changeAuthentificationFields,
  postLogin,
} from "../../actions/authentification";
import { RootState } from "../../store/store";
//import { RootState } from "app/store";
import ViewModel from "./Model";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  password: state.authentication.password,
  email: state.authentication.email,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  postLogin: () => {
    dispatch(postLogin());
  },
  changeAuthentificationFields: (field: string, value: any) => {
    dispatch(changeAuthentificationFields(field, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
