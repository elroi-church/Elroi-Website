import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
  isOpen: boolean
}

const initialState: ModalState = {
  isOpen: false,
}

export const modalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleModal: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isOpen = !state.isOpen
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleModal } = modalSlice.actions

export default modalSlice.reducer