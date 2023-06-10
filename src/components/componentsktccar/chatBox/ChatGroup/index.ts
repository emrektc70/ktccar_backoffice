import { connect } from "react-redux";
import { Dispatch } from "redux";
import ViewModel from "./Model";
import { changeMessageFields, getMessages, postMessages } from "../../../../actions/message";
import { changeGroupeFields } from "../../../../actions/groupe";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    message: state.message.message,
    isPin: state.message.isPin,
    groupId: state.message.groupId,
    messageChat: state.message.messageChat,
    group_id: state.message.group_id,
    effective: state.groupe.effective,
    capacity: state.groupe.capacity,
    groupes: state.groupe.groupes
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    postMessages: () => {
        dispatch(postMessages());
    },
    changeMessageFields: (field: string, value: any) => {
        dispatch(changeMessageFields(field, value))
    },
    getMessages: () => {
        dispatch(getMessages());
    },
    changeGroupeFields: (field: string, value: any) => {
        dispatch(changeGroupeFields(field, value))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
