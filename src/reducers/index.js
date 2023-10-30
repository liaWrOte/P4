import {
  SET_TIMELINE_DATA,
  SET_LIST_DATA, 
  SET_HOOK_DATA
} from '../actions/index';

const initialState = {
  // Define your initial state here
  timelineDataExperience: [],
  timelineDataEducation: [],
  listSkills: [],
  listInterests: [],
  hook: []
};

const rootReducer = (state = initialState, action) => {

  // console.log('action', action);
  switch (action.type) {
    // Define your reducer cases here

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
      console.log('ACTION', action);
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