import { actionTypes } from "./actionTypes";

export const initialState = {
  firstName: "",
  lastName: "",
  emial: "",
  gender: "",
  education: "",
  quantity: 0,
  feedback: "",
  term: false,
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.TOGGLE:
      return {
        ...state,
        term: !state.term,
      };
      case actionTypes.DECREMENT:
      return {
        ...state,
        quantity: state.quantity - action.payload.count,
      };
    case actionTypes.INCREMENT:
      return {
        ...state,
        quantity: state.quantity + action.payload.count,
      };
    default:
      return state;
  }
};