import {Customer} from "../models/Customer";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const initialState : Customer[] = [];

const api = axios.create({
    baseURL : "http://localhost:3000/customer"
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
    async (id : string) =>{
        try{
            const response = await api.delete(`/delete/${id}`);
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
)

export const updateCustomer  = createAsyncThunk(
    'customer/updateCustomer',
    async (customer : Customer) =>{
        try{
            const response = await api.put(`/update/${customer.id}`,customer);
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
)

export const getCustomers = createAsyncThunk(
    'customer/getCustomers',
    async ()=>{
        try{
            const response = await api.get('/view');
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
)

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
            .addCase(deleteCustomer.rejected, (state, action) => {
                console.error("Failed to save customer:", action.payload);
            })
            .addCase(deleteCustomer.fulfilled, (state, action) => {
               return state = state.filter((customer:Customer)=> customer.email !== action.payload.email);
            })
            .addCase(deleteCustomer.pending, (state, action) => {
                console.log("Pending delete customer",action.payload);
            });
        builder
            .addCase(updateCustomer.rejected, (state, action) => {
                console.error("Failed to save customer:", action.payload);
            })
            .addCase(updateCustomer.fulfilled, (state, action) => {
                const customer = state.find((customer:Customer) => customer.email === action.payload.email);
                if (customer) {
                    customer.name = action.payload.name;
                    customer.phone = action.payload.phone;
                }
            })
            .addCase(updateCustomer.pending, (state, action) => {
                console.log("Pending update customer:", action.payload);
            });
        builder
            .addCase(getCustomers.fulfilled, (state, action) => {
                action.payload.map((customer:Customer) => {
                    state.push(customer);
                })
            })
            .addCase(getCustomers.pending, (state, action) => {
                console.log("Pending get customer:", action.payload);
            })
            .addCase(getCustomers.rejected, (state, action) => {
                console.error("Failed to save customer:", action.payload);
            })

    }
});

export const {addCustomer}  = customerSlice.actions;
export default customerSlice.reducer;