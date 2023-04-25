import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getMessages } from "../../actions/message";
import { RootState } from "../../store/store";
//import { RootState } from "app/store";
import ViewModel from "./Model";
import { getGroupes } from "../../actions/groupe";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMessages: () => {
    dispatch(getMessages());
  },
  getGroupes: () => {
    dispatch(getGroupes());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
