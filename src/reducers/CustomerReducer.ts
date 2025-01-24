import {Customer} from "../models/Customer";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState : Customer[] = [];

const customerSlice = createSlice({
    name : 'customer',
    initialState,
    reducers:{
        addCustomer(state, action:PayloadAction<Customer>){
            state.push(action.payload);
        }
    }
});

export const {addCustomer}  = customerSlice.actions;
export default customerSlice.reducer;