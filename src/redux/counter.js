const types = {
  INCREMENT: 'INCREMENT',
  SET_COUNT: 'SET_COUNT'
};

/* ACTIONS */

export const setCount = (number) => ({
  type: types.SET_COUNT,
  payload: number
});


/* Reducers */
const initiaState = {
  count: 0
};
export default (state=initiaState, action) => {
  const {type, payload} = action;
  switch(type) {
    case types.INCREMENT:
      return {...state, count: state.count+1};
    case types.SET_COUNT:
      return {...state, count: payload};
    default:
      return state;
  }

}