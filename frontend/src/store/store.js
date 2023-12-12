import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState: {userId: -1, userName: "GUEST"},
  reducers: {
    changeUser(state, action){
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
    }
  }
})

let users = createSlice({
  name: 'users',
  initialState:  [
			{ userId: 1, userName: "CGCG" },
			{ userId: 2, userName: "동민" },
			{ userId: 3, userName: "너굴맨" },
	],
  reducers: {
    addUser(state, action){
      const id = (state.length == 0) ? 1 : state[state.length - 1].userId + 1;
      const newState = [...state];
      newState.push({
        userId: id,
        userName: action.payload,
      });
      return newState;
    },
    deleteUser(state, action){
      const newState = [];
      state.map((u, index)=>{
        console.log(u.userId, action.payload);
        if(u.userId !== action.payload){
          newState.push(u);
        }
      });
        console.log(newState);
        return newState;
    }
  }
})

let path = createSlice({
  name: 'path',
  initialState: {liveId: -1},
  reducers: {
    changePath(state, action){
      state.liveId = action.payload;
    }
  }
})

export default configureStore({
  reducer: {
    user: user.reducer,
    path: path.reducer,
    users: users.reducer,
  }
}) 

export let { changeUser } = user.actions
export let { changePath } = path.actions
export let { addUser, deleteUser } = users.actions