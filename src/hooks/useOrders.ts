import { useMutation, useQuery } from "@tanstack/react-query";
import { FETCH_ORDERS_API, MUT_SINGLE_ORDER, FETCH_SINGLE_ORDERS_API } from '../config/apis'
import useApiResult from "./useApiResult";

const useOrders = () => {

    var { isPending, isError, data } = useQuery({
        queryKey: ['ordersFetch'],
        queryFn: () => fetch(FETCH_ORDERS_API).then((res) => res.json())
    })

    var result = useApiResult('HomeTP', isPending, isError, data);
    return result;

}

export const useGetOrder = (orderId: string) => {

    var { isPending, isError, data } = useQuery({
        queryKey: ['singleOrderFetch'],
        queryFn: () => fetch(FETCH_SINGLE_ORDERS_API + orderId).then((res) => res.json())
    })

    var result = useApiResult('general', isPending, isError, data);
    return result;
}

export const useUpdateOrder = (orderId: string, url: string) => {

    var { isPending, isError, data } = useMutation({
        mutationFn: () => fetch(
            MUT_SINGLE_ORDER,
            {
                method: 'post',
                body: JSON.stringify({ url, orderId })
            }
        )
    });
    console.log(isPending, data);
    
    // var result = useApiResult('general', isPending, isError, data);
    // console.log(result);
    
    return {isPending, data}
}

export default useOrders;