import {addPostAC, AddPostAT, ProfilePageType, profileReducer} from "./profile-reducer";

const state: ProfilePageType = {
  posts: [],
  newPostText: "",
  profile: {
    boutMe: '',
    contacts: {
      facebook: '',
      website: '',
      vk: '',
      twitter: '',
      instagram: '',
      youtube: '',
      github: ''
    },
    fullName: '',
    lookingForAJob: false,
    lookingForAJobDescription: null,
    photos: {
      large: '',
      small: '',
    },
    userId: 0,
  },
  status: "",
};


it("new post should be added", () => {
  const action: AddPostAT = addPostAC("postText");

  let newState: ProfilePageType = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
  expect(newState.posts[0].message).toBe("postText");
});
