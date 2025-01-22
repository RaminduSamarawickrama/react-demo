import {Customer} from "../models/Customer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/store";
import {useEffect} from "react";
import {getCustomers} from "../reducers/CustomerReducer";

export function Dashboard() {

    const dispatch = useDispatch<AppDispatch>();

    const customers = useSelector((state)=>state.customer);

    useEffect(() => {
        if (customers.length === 0) {
            dispatch(getCustomers());
        }
    }, [dispatch, customers.length]);

    return (
        <>
            Dashboard
            {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
        </>
    );
}