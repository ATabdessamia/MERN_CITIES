/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_TOURS":
      return action.payload;
    case "FETCH_TOURS_BY":
      return action.payload;
    default:
      return state;
  }
};
