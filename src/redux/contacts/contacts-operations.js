import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const { data } = await axios.post("/contacts", contact);
    return data;
  }
);

const removeContact = (id) => {
  return axios.delete(`/contacts/${id}`);
};

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId) => {
//     const {
//       data: { id },
//     } = await axios.delete(`./contacts/${contactId}`);
//     return id;
//   }
// );

const getContacts = () => {
  return axios.get("/contacts").then(({ data }) => data);
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchContacts",
//   async () => {
//     const { data } = await axios.get("/contacts");
//     return data;
//   }
// );
