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

let keyboard = createSlice({
  name: 'keyboard',
  initialState: {event: 0},
  reducers: {
    toggleKeyboard(state){
      state.event = (state.event === 0 ? 1 : 0);
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
    keyboard: keyboard.reducer,
  }
}) 

export let { changeUser } = user.actions
export let { changePath } = path.actions
export let { toggleKeyboard } = keyboard.actions