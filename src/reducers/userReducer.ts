import { AnyAction } from "redux";
import { SET_USER_FIELDS } from "../actions/user";

type State = {
    firstName: string,
    lastName: string,
    userName: string,
    // profile_picture: null
    id: string

};

const initialState: State = {
    firstName: '',
    lastName: '',
    userName: '',
    id: ""
};

const userReducer = (state = initialState, action: AnyAction): State => {
    switch (action.type) {
        case SET_USER_FIELDS:
            return {
                ...state,
                [action.field]: action.value,
            } as State;
        default:
            return state as State;
    }
};

export default userReducer;
