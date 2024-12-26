import {useContext} from "react";
import {Customer} from "../models/Customer";
import {CustomerContext} from "../store/CustomerProvider";

export function Dashboard() {

    const [customers, dispatch] = useContext(CustomerContext);
    return (
        <>
            Dashboard
            {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
        </>
    );
}