import axios from 'axios';
import { apiUrl } from './env'
import {
    GET_TIMELINE_DATA,
    setTimelineData,
    GET_LIST_DATA,
    showListData,
    GET_HOOK_DATA,
    setHookData
} from '../actions/index';


const mainMiddleware = (store) => (next) => (action) => {
    // console.debug('middleware', store.action);

    // console.log(next);
    // console.log('middleware ', action);
    // const config = {
    //     headers: { Authorization: `Bearer ${tokenValue}` },
    // console.log(action);
    //   };
    switch (action.type) {


        case GET_TIMELINE_DATA:
            axios.get(`${apiUrl}/${action.value}?populate=*`)
            .then((response) => {
                store.dispatch(setTimelineData({data: response.data.data, content: action.value}));
            })
            .catch((error) => {
                console.error(error);
            });
            next(action);
            break;

        case GET_LIST_DATA:
            axios.get(`${apiUrl}/${action.value}`)
            .then((response) => {
                store.dispatch(showListData({data: response.data.data, content: action.value}));
            })
            .catch((error) => {
                console.error(error);
            });
            next(action);
            break;

        case GET_HOOK_DATA:
            axios.get(`${apiUrl}/intros`)
            .then((response) => {
                store.dispatch(setHookData(response.data.data));
            })
            .catch((error) => {
                console.error(error);
            });
            next(action);
            break;

        default:
            next(action);
    }
};

export default mainMiddleware;

// 6babc2fe69a26fe97b8367319d704f4b788331080cbf5f05f76fd179ad16984e072833598dc12cc6f9dd995a00f1ef5afe176289c5ebd88e7a533ed260a0a6fc99b6b076ec7fafa6b40d68385e3d7b734b1fa25dbbc59c0c5d2f2eaa079c5df3982dc95d1e145275746f4d099aba3b70b77865b12f410da6d169bea09b06d658