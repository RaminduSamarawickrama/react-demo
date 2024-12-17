import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider";
import {Modal} from "../components/Modal";

export function UpdateCustomer() {

    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const updatedCustomers = customers.map((customer) =>
            customer.email === email ?
                {...customer, name : name, email : email, phone : phone }
                : customer
        );
        setCustomers(updatedCustomers);
        navigate('/');
    }

    return (
        <>
            <header><h2>Update Customer</h2></header>
            <br/>
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>Update Customer</Modal>
        </>
    );
}