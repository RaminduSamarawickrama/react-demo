import {Customer} from "../models/Customer";
import {useDispatch, useSelector} from "react-redux";

export function Dashboard() {

    const dispatch = useDispatch();

    const customers = useSelector((state)=>state.customer);

    return (
        <>
            Dashboard
            {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
        </>
    );
}