import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loading = true;
    state.user = action.payload;
  },
  LoadUserFailed: (state, action) => {
    state.isAuthenticated = false;
    state.loading = false;
    state.user = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },
});
