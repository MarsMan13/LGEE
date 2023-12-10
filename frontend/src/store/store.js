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

export default configureStore({
  reducer: {
    user: user.reducer
  }
}) 

export let { changeUser } = user.actions