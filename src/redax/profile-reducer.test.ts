import { addPostActionCreator, AddPostAT, ProfilePageType, profileReducer } from "./profile-reducer";

const state: ProfilePageType = {
  posts: [],
  newPostText: "",
  profile: {},
  status: "",
};

it("new post should be added", () => {
  const action: AddPostAT = addPostActionCreator("postText");

  let newState: ProfilePageType = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
  expect(newState.posts[0].message).toBe("postText");
});
