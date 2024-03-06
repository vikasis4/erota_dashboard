import React from "react";

type API_TYPE = {
    isLoading: boolean,
    isError: boolean,
    tl: number,
    pl: number,
    data: any[]
}
export interface API_DATA_TYPE {
    User: API_TYPE;
    Order: API_TYPE;
    Query: API_TYPE;
    setUser: React.Dispatch<React.SetStateAction<API_TYPE>>;
    setOrder: React.Dispatch<React.SetStateAction<API_TYPE>>;
    setQuery: React.Dispatch<React.SetStateAction<API_TYPE>>;
}

var newData: {}[] = []
const initialValue = { isLoading: true, isError: false, tl: 0, pl: 0, data: newData };
var stateFxn: React.Dispatch<React.SetStateAction<API_TYPE>> = (API_TYPE): void => { };
const API_DATA_VALUE = {
    User: initialValue,
    Order: initialValue,
    Query: initialValue,
    setUser: stateFxn,
    setOrder: stateFxn,
    setQuery: stateFxn
}

export const ApiDataContext = React.createContext<API_DATA_TYPE>(API_DATA_VALUE);

const ApiDataProvider = ({ children }: { children: React.JSX.Element }) => {

    const [User, setUser] = React.useState<API_TYPE>(initialValue);
    const [Order, setOrder] = React.useState<API_TYPE>(initialValue);
    const [Query, setQuery] = React.useState<API_TYPE>(initialValue);

    return (
        <ApiDataContext.Provider value={{ User, setUser, Order, setOrder, Query, setQuery }}>
            {children}
        </ApiDataContext.Provider>
    )
}

export default ApiDataProvider