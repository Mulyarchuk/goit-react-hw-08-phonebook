import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContacts,deleteContacts, changeContacts } from "./operations";

const contactsInitialState ={
    contacts: {
    items: [],
    isLoading: false,
    error: null
},
  };

const phoneSlice = createSlice({
    name: 'phones',
    initialState: contactsInitialState,
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending, (state, action) => {
                state.contacts.isLoading = true;  
                state.contacts.error = '';
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error =  action.payload;
        })


        .addCase(addContacts.pending, (state, action) => {
            state.contacts.isLoading = true;  
            state.contacts.error = '';
        })
        .addCase(addContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.items.push(action.payload);
               
        })
        .addCase(addContacts.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error =  action.payload;
        })

        .addCase(deleteContacts.pending, (state, action) => {
                state.contacts.isLoading = true;  
                state.contacts.error = '';
        })
        .addCase(deleteContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload)
        })
        .addCase(deleteContacts.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error =  action.payload;
        })
        .addCase(changeContacts.pending, (state, action) => {
                state.contacts.isLoading = true;
                state.contacts.error = '';
        })
        .addCase(changeContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = [
                payload,
                ...state.contacts.items.filter(contact => {
                return contact.id !== payload.id;
                }),
        ];

        state.contacts.isLoading = false;
        })
        .addCase(changeContacts.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
        });
    }
})

export const phonesReducer = phoneSlice.reducer;
export const getPhones = ({contacts}) => contacts.contacts.items;