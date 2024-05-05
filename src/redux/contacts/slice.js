import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePendingState = (state) => {
  state.loading = true;
  state.error = null;
};

const handleErrorState = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        handlePendingState(state);
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        handleErrorState(state, action);
      })

      .addCase(addContact.pending, (state) => {
        handlePendingState(state);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        handleErrorState(state, action);
      })

      .addCase(deleteContact.pending, (state) => {
        handlePendingState(state);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        handleErrorState(state, action);
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
