import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider";
import {Customer} from "../models/Customer";
import {Modal} from "../components/Modal";

export function DeleteCustomer() {

    const navigate = useNavigate();
    const [setCustomers] = useContext(CustomerContext);

    const [setName] = useState("");
    const [setEmail] = useState("");
    const [setPhone] = useState("");

    function handleSubmit() {
        setCustomers((customers: Customer[]) => customers.slice(0,-1));
        navigate('/');
    }

    return (
        <>
            <header><h2>Delete Customer</h2></header>
            <br/>
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>Delete Customer</Modal>
        </>
    );
}