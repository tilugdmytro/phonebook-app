import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   addContactError,
//   addContactRequest,
//   addContactSuccess,
//   deleteContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   fetchContactsError,
//   fetchContactsRequest,
//   fetchContactsSuccess,
// } from "./contacts-actions";

axios.defaults.baseURL = "https://61967520af46280017e7e0e4.mockapi.io/api/";

// ////////// с использованием createAsyncThunk ////////////

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const { data } = await axios.post("/contacts", contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    const {
      data: { id },
    } = await axios.delete(`./contacts/${contactId}`);
    return id;
  }
);

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const { data } = await axios.get("/contacts");
    return data;
  }
);

////////// без createAsyncThunk /////////////

// export const addContact = (name, number) => async (dispatch) => {
//   const contact = { name, number };
//   dispatch(addContactRequest());
//   try {
//     const { data } = await axios.post("/contacts", contact);
//     dispatch(addContactSuccess(data));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
//   // синхронный вариант
//   //   axios
//   //     .post("/contacts", contact)
//   //     .then(({ data }) => dispatch(addContactSuccess(data)))
//   //     .catch((error) => dispatch(addContactError(error)));
// };

// export const deleteContact = (contactId) => async (dispatch) => {
//   dispatch(deleteContactRequest());
//   try {
//     const contacts = await axios.delete(`./contacts/${contactId}`);
//     dispatch(deleteContactSuccess(contacts));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
//   // синхронный вариант
//   //   axios
//   //     .delete(`./contacts/${contactId}`)
//   //     .then(() => dispatch(deleteContactSuccess(contactId)))
//   //     .catch((error) => dispatch(deleteContactError(error)));
// };

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(fetchContactsRequest());
//   try {
//     const { data } = await axios.get(`./contacts`);
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
//   // синхронный вариант
//   //   axios
//   //     .get(`./contacts`)
//   //     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//   //     .catch((error) => dispatch(fetchContactsError(error)));
// };
