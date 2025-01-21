import {Customer} from "../models/Customer";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const initialState : Customer[] = [];

const api = axios.create({
    baseURL : "http://localhost:3002"
})

export const saveCustomer = createAsyncThunk(
    'customer/saveCustomer',
    async (customer: Customer) => {
        try {
            const response = await api.post('/add', customer);
            return response.data;
        } catch (error) {
            return console.log('error',error)
        }
    }
);

export const deleteCustomer = createAsyncThunk(
    'customer/deleteCustomer',
    async (email: string) =>{
        try{
            const response = await api.delete(`/delete/${id}`);
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
)

export const updateCustomer = createAsyncThunk(
    'customer/updateCustomer',
    async (payload:{email: string, customer: Customer}) =>{
        try{
            const response = await api.put(`/update/${payload.id}`, payload.customer)
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
);

const customerSlice = createSlice({
    name : 'customer',
    initialState,
    reducers:{
        addCustomer(state, action:PayloadAction<Customer>){
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveCustomer.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveCustomer.rejected, (state, action) => {
                console.error("Failed to save customer:", action.payload);
            })
            .addCase(saveCustomer.pending, (state, action) => {
                console.error("Pending");
            });
        builder
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                return state.filter(customer => customer.email !== action.payload);
            })
            .addCase(deleteCustomer.rejected, (state, action) => {
                console.error("Failed to delete customer:", action.payload);
            })
            .addCase(deleteCustomer.pending, (state) => {
                console.log("Deleting customer...");
            });

        builder
            .addCase(updateCustomer.fulfilled, (state, action) => {
                state.map((customer)=>{
                    if(customer.id === action.payload.id){
                        customer.name = action.payload.customer.name;
                        customer.email = action.payload.customer.email;
                        customer.phone = action.payload.customer.phone;
                    }
                })
            })
            .addCase(updateCustomer.rejected, (state, action) => {
                console.error("Failed to save customer:", action.payload); // Handle error
            })
            .addCase(updateCustomer.pending, (state, action) => {
                console.error("Pending"); // Handle error
            });

    }
});

export const {addCustomer}  = customerSlice.actions;
export default customerSlice.reducer;