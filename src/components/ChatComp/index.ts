import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getMessages } from "../../actions/message";
import { RootState } from "../../store/store";
//import { RootState } from "app/store";
import ViewModel from "./Model";
import { getGroupes, postGroupeId } from "../../actions/groupe";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  groupes: state.groupe.groupes
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMessages: () => {
    dispatch(getMessages());
  },
  getGroupes: () => {
    dispatch(getGroupes());
  },
  postGroupeId: (id: number) => {
    dispatch(postGroupeId(id));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
function handleClickJoinGroupe(id: number): any {
  throw new Error("Function not implemented.");
}

