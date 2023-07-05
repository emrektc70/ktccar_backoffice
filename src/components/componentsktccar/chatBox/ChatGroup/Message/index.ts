import { connect } from "react-redux";
import { Dispatch } from "redux";
//import { RootState } from "app/store";
import ViewModel from "./Model";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  id: state.user.id,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
