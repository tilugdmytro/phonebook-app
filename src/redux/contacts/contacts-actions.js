import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction("contacts/changeFilter");
export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/delete");
export const fetchContacts = createAction("contacts/fetchContacts");
