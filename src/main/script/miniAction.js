import { ActionTypes } from './actionTypes';

export const requestStudent = () => {
  return {
    type: ActionTypes.FETCH_DATA_REQUEST,
  };
};

export const fetchStudent = (data) => {
  return {
    type: ActionTypes.FETCH_DATA_SUCCESS,
    data,
  };
};

export const fetchStudentError = (error) => {
  return {
    type: ActionTypes.FETCH_DATA_FAILURE,
    error,
  };
};
