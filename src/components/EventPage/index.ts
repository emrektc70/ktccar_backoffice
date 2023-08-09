import { connect } from "react-redux";
import { Dispatch } from "redux";
//import { RootState } from "app/store";
import ViewModel from "./Model";
import { getEvent } from "../../actions/event";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
  events: state.event.events,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getEvent: () => {
    dispatch(getEvent());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
