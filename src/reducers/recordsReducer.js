import {
  FETCH_RECORDS_SUCCESS,
  CREATE_RECORD_SUCCESS,
  GET_ERRORS,
} from "../actions/actionTypes";

const initialState = {
  records: [],
  errors: {}
};

export default function recordsReducer(state = initialState, action) {
    
  switch (action.type) {
    case FETCH_RECORDS_SUCCESS:
      return {
        ...state,
        records: action.data,
      };
    case CREATE_RECORD_SUCCESS:
       const filteredRecords = state.records.filter(item => item.recordId !== action.data.recordId)
      return {
        ...state,
        records: [...filteredRecords, action.data],
      };
      case GET_ERRORS:
       return {
         ...state,
         errors: action.data,
       };
    default:
      return state;
  }
}
