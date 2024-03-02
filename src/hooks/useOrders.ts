import { useQuery } from "@tanstack/react-query";
import { FETCH_ORDERS_API } from '../config/apis'
import * as UTILS from '../utils';

const useOrders = () => {

    var { isPending, isError, data } = useQuery({
        queryKey: ['ordersFetch'],
        queryFn: () => fetch(FETCH_ORDERS_API).then((res) => res.json())
    })

    if (!isPending && data.status == 'true') {
        return { isPending, isError, data, tl: data.data.length, pl: UTILS.calcPendList(data.data) }
    } else if (!isPending && data.status == 'false') {
        return { isPending: false, isError: true, data: [], tl: 0, pl: 0 }
    } else {
        return { isPending: true, isError: false, data: [], tl: 0, pl: 0 }
    }
}

export default useOrders