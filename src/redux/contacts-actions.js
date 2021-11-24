// import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction("contacts/changeFilter");
export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/delete");
export const fetchContacts = createAction("contacts/fetchContacts");

// const addContact = createAction("contacts/add", (name, number) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

// eslint-disable-next-line
// export default { addContact, deleteContact, changeFilter };

// export const addContactRequest = createAction("contacts/addContactRequest");
// export const addContactSuccess = createAction("contacts/addContactSuccess");
// export const addContactError = createAction("contacts/addContactError");

// export const deleteContactRequest = createAction("contacts/delContactRequest");
// export const deleteContactSuccess = createAction("contacts/delContactSuccess");
// export const deleteContactError = createAction("contacts/delContactError");

// export const fetchContactsRequest = createAction(
//   "contacts/fetchContactsRequest"
// );
// export const fetchContactsSuccess = createAction(
//   "contacts/fetchContactsSuccess"
// );
// export const fetchContactsError = createAction("contacts/fetchContactsError");
