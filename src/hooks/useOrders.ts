import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

export const useUpdateOrder = () => {

    const queryClient = useQueryClient()


    var { isPending, isError, data: isServerError, mutate } = useMutation({
        mutationFn: async (data) => {
            const res = await fetch(MUT_SINGLE_ORDER, {
                method: 'POST',
                headers: {
                    Accept: 'application.json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            var result = await res.json();
            if (result.status == 'true') { return false }
            return true
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['singleOrderFetch'] })
        },
    });

    return { isPending, isError, isServerError, mutate }
}

export default useOrders;