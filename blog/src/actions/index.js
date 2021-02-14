import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // When we calling to action creator inside in action creator,
  // We need to make sure that we dispatch the resolt of action creator.
  // We need to put the await keyword infront of the dispatch function,
  // To make sure that we wait to the api request to be complited,
  // Before we move on and do somthing else inside this action creator.
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  // Async await syntax is not working with the forEach statment.
  // We are not using await before fetchUser dispatch becouse we dont
  // need to do nothing after we fatching the users.
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () =>
  // if we use async/await syntax so the function is not returning an object!!!
  // we can run the code on bable.io to be sure
  // with redux-thunx thunk we can use async/await syntax
  async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};
