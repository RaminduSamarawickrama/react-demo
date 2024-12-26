import {createContext, useReducer} from "react";
import {CustomerReducer, initialState} from "../reducers/CustomerReducer";

export const CustomerContext  = createContext();

export function CustomerProvider({children}) {

    const [customers, dispatch] = useReducer(CustomerReducer, initialState);

    return (
        <CustomerContext.Provider value={[customers, dispatch]}>
            {children}
        </CustomerContext.Provider>
    );
}