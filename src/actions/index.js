export const GET_TIMELINE_DATA = 'GET_TIMELINE_DATA';
export const SET_TIMELINE_DATA = 'SET_TIMELINE_DATA';
export const GET_LIST_DATA = 'GET_LIST_DATA';
export const SET_LIST_DATA = 'SET_LIST_DATA';
export const GET_HOOK_DATA = 'GET_HOOK_DATA';
export const SET_HOOK_DATA = 'SET_HOOK_DATA';

export const getTimelineData = (value) => ({
    type: GET_TIMELINE_DATA,
    value
})
export const setTimelineData = (value) => ({
    type: SET_TIMELINE_DATA,
    value
})
export const getListData = (value) => ({
    type: GET_LIST_DATA,
    value
})
export const showListData = (value) => ({
    type: SET_LIST_DATA,
    value
})
export const getHookData = () => ({
    type: GET_HOOK_DATA,
})
export const setHookData = (value) => ({
    type: SET_HOOK_DATA,
    value
})
