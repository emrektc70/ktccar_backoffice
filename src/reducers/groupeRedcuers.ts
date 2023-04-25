import { AnyAction } from "redux";
import { SET_GROUPE_FIELDS } from "../actions/groupe";

type State = {

};

const initialState: State = {

};

const groupesReducer = (
    state = initialState,
    action: AnyAction
): State => {
    switch (action.type) {
        case SET_GROUPE_FIELDS:
            return {
                ...state,
                [action.field]: action.value,
            } as State;
        default:
            return state as State;
    }
};

export default groupesReducer;
