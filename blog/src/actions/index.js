import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () =>
  // if we use async/await syntax so the function is not returning an object!!!
  // we can run the code on bable.io to be sure
  // with redux-thunx thunk we can use async/await syntax
  async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response,
    });
  };
