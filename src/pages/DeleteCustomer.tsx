import {useNavigate} from "react-router";
import { useState} from "react";
import {AppDispatch} from "../store/store";
import {Modal} from "../components/Modal";
import {useDispatch} from "react-redux";

export function DeleteCustomer() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email,setEmail] = useState("");


    function handleSubmit() {
        navigate('/');
    }

    return (
        <>
            <header><h2>Delete Customer</h2></header>
            <br/>
            <Modal handleSubmit={handleSubmit}  isDelete={true} setEmail={setEmail}>Delete Customer</Modal>
        </>
    );
}