import {useNavigate} from "react-router";
import {useState} from "react";
import {Customer} from "../models/Customer";
import {Modal} from "../components/Modal";
import { saveCustomer} from "../reducers/CustomerReducer";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";

export function AddCustomer() {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone);
        dispatch(saveCustomer(newCustomer));
        navigate('/');
    }

    return (
        <>
            <header><h2>Add Customer</h2></header>
            <br/>

            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone} >Add Customer</Modal>
        </>
    );
}