import {useNavigate} from "react-router";
import {useState} from "react";
import {AppDispatch} from "../store/store";
import {Modal} from "../components/Modal";
import {Customer} from "../models/Customer";
import {useDispatch} from "react-redux";
import {updateCustomer} from "../reducers/CustomerReducer";

export function UpdateCustomer() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const updatedCustomer = new Customer(name, email, phone);
        dispatch(updateCustomer(updatedCustomer));
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