import { useQuery } from "@tanstack/react-query";
import { FETCH_ORDERS_API } from '../config/apis'
import useApiResult from "./useApiResult";

const useOrders = () => {

    var { isPending, isError, data } = useQuery({
        queryKey: ['ordersFetch'],
        queryFn: () => fetch(FETCH_ORDERS_API).then((res) => res.json())
    })

    var result = useApiResult('HomeTP', isPending, isError, data);    
    return result;
}

export default useOrders