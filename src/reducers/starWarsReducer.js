import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
  isLoading: false,
  error: ''
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: []
      }
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        error: 'Something is not working!"
      }
    default:
      return state;
  }
};
