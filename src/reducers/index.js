import {
  SET_TIMELINE_DATA,
  SET_LIST_DATA, 
  SET_HOOK_DATA
} from '../actions/index';

const initialState = {
  timelineDataExperience: [],
  timelineDataEducation: [],
  listSkills: [],
  listInterests: [],
  hook: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_TIMELINE_DATA: {
      if (action.value.content == "experiences")
      return {
        ...state,
        timelineDataExperience: action.value.data
      };
      if (action.value.content == "educations")
      return {
        ...state,
        timelineDataEducation: action.value.data
      };
    }

    case SET_LIST_DATA: {
      if (action.value.content == "skills")
      return {
        ...state,
        listSkills: action.value.data
      };
      if (action.value.content == "interests")
      return {
        ...state,
        listInterests: action.value.data
      };
    }

    case SET_HOOK_DATA: {
      return {
        ...state,
        hook: action.value
      };
    }

    default:
      return state;
  }
};

export default rootReducer;