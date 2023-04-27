import { connect } from "react-redux";
import { Dispatch } from "redux";
//import { RootState } from "app/store";
import ViewModel from "./Model";
import { postGroupeId } from "../../../actions/groupe";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    postGroupeId: (id: number) => {
        dispatch(postGroupeId(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
