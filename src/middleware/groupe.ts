import { GET_GROUPES, changeGroupeFields } from "../actions/groupe";
import getGroupe from "../api/groupe/getGroupes";


const groupesMiddleware =
    (store: any) => (next: any) => async (action: any) => {
        switch (action.type) {
            case GET_GROUPES: {
                const groupe = await getGroupe()
                store.dispatch(changeGroupeFields('groupes', groupe))
                console.log(groupe)
                break
            }
            default:
                next(action);
        }
    };

export default groupesMiddleware;
