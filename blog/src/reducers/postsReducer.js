// When our application is first loaded up inside the browser
// All of our reducers run one initial time!
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
