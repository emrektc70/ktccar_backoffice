import { AnyAction } from "redux";
import { SET_EVENT_FIELDS } from "../actions/event";

type State = {
};

const initialState: State = {
};

const eventReducers = (state = initialState, action: AnyAction): State => {
    switch (action.type) {
        case SET_EVENT_FIELDS:
            return {
                ...state,
                [action.field]: action.value,
            } as State;
        default:
            return state as State;
    }
};

export default eventReducers;
