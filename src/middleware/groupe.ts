import { GET_GROUPES, POST_GROUPE_ID, changeGroupeFields } from "../actions/groupe";
import getGroupe from "../api/groupe/getGroupes";
import postGroupeId from "../api/groupe/postGroupesId";


const groupesMiddleware =
    (store: any) => (next: any) => async (action: any) => {
        switch (action.type) {
            case GET_GROUPES: {
                const groupe = await getGroupe()
                store.dispatch(changeGroupeFields('groupes', groupe))
                break
            }
            case POST_GROUPE_ID: {
                const { groupeData } = store.getState().groupe
                await postGroupeId(action.id, groupeData)
                break
            }
            default:
                next(action);
        }
    };

export default groupesMiddleware;
