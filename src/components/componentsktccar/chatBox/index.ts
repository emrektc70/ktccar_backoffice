import { connect } from "react-redux";
import { Dispatch } from "redux";
//import { RootState } from "app/store";
import ViewModel from "./Model";
import { postGroupeId } from "../../../actions/groupe";
import { changeMessageFields } from "../../../actions/message";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    group_id: state.message.group_id,

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    postGroupeId: (id: number) => {
        dispatch(postGroupeId(id));
    },
    changeMessageFields: (field: string, value: any) => {
        dispatch(changeMessageFields(field, value))
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
