import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IUser } from '../../models/IUser'
import { IMemes } from '../../models/IMemes'


interface CounterState {
  users: IUser[], 
  choosedUser: any,
  searchValue: string,
  treckerId: number[]
}


const initialState: CounterState = {
  users: JSON.parse(localStorage.getItem('users') ?? '[]'),
  choosedUser: {},
  searchValue: "",
  treckerId: []
}

export const counterSlice = createSlice({
  name: 'user',

  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<any[]>) => {
      state.users = action.payload
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    addClickedUser: (state, action: PayloadAction<Object>) => {
      state.choosedUser = action.payload
    },
    addSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    addNewMessage: (state, action: PayloadAction<Object>) => {
      let value: number = state.choosedUser.id
      state.users[value].message.push(action.payload)
    },
    addNewMemes: (state, action: PayloadAction<Object>) => {
      
      localStorage.setItem("users", JSON.stringify(state.users));
      state.users[state.treckerId[0]].message.push(action.payload)
      state.treckerId.shift()
    },
    addId: (state, action: PayloadAction<number>) => {

      state.treckerId.push(action.payload)
    }
  },
})

export const { addUsers, addClickedUser, addSearchValue, addNewMessage, addId, addNewMemes } = counterSlice.actions

export default counterSlice.reducer