import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {AppDispatch, CustomerContext} from "../store/store";
import {Customer} from "../models/Customer";
import {Modal} from "../components/Modal";
import {useDispatch} from "react-redux";
import {deleteCustomer} from "../reducers/CustomerReducer";

export function DeleteCustomer() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    function handleSubmit() {
        dispatch(deleteCustomer(email))
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