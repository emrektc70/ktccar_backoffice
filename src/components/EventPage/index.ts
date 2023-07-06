import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../store/store";
//import { RootState } from "app/store";
import ViewModel from "./Model";
import { getGroupes, postGroupeId } from "../../actions/groupe";
import { getEvent } from "../../actions/event";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  event: state.event.event,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getGroupes: () => {
    dispatch(getGroupes());
  },
  postGroupeId: (id: number) => {
    dispatch(postGroupeId(id));
  },
  getEvent: () => {
    dispatch(getEvent());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
