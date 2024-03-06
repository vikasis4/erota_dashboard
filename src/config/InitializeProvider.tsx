import React from 'react';
import useStore from '../hooks/useStore';
import * as HOOKS from '../hooks'
import cutList from '../utils/cutList';


const InitializeProvider = ({ children }: { children: any }) => {

    const { API, GEN } = useStore();

    var users = HOOKS.useUser()
    var orders = HOOKS.useOrders()
    var queries = HOOKS.useQueries()

    React.useEffect(() => {
        API.setUser({ ...users, data: cutList(users.data, GEN.pageNumber.user) });
        API.setOrder({ ...orders, data: cutList(orders.data, GEN.pageNumber.order) });
        API.setQuery({ ...queries, data: cutList(queries.data, GEN.pageNumber.query) });
    }, [users.isPending, orders.isPending, queries.isPending, GEN.pageNumber.user, GEN.pageNumber.order, GEN.pageNumber.query])

    return (
        <>
            {children}
        </>
    )
}

export default InitializeProvider