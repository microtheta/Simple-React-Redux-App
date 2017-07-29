import service from './service';

const types = {
  USERS_LOADING: 'USERS_LOADING',
  SET_USER: 'SET_USER'
};

/* ACTIONS */

export const getUsers = () => {
  return (dispatch, getState) => {
    return service.get('about.json').then((response) => {
      dispatch({
        type: types.SET_USER,
        payload: response.data
      });
    }).catch((e) => {
      console.log(e);
    })
  }
};


/* Reducers */
const initiaState = {
  users: []
};

export default (state=initiaState, action) => {
  const {type, payload} = action;
  switch(type) {
    case types.SET_USER:
      return {...state, users: payload};
    default:
      return state;
  }
}