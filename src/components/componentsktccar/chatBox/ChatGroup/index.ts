import { connect } from "react-redux";
import { Dispatch } from "redux";
import ViewModel from "./Model";
import { changeMessageFields, postMessages } from "../../../../actions/message";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    message: state.message.message,
    isPin: state.message.isPin,
    groupId: state.message.groupId
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    postMessages: () => {
        dispatch(postMessages());
    },
    changeMessageFields: (field: string, value: any) => {
        dispatch(changeMessageFields(field, value))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
