import { useQuery } from "@tanstack/react-query";
import { FETCH_SLIPS_API } from '../config/apis'


const useSlips = () => {

    var { isPending, isError, data } = useQuery({
        queryKey: ['slipsFetch'],
        queryFn: () => fetch(FETCH_SLIPS_API).then((res) => res.json())
    })
    
    if (!isPending) {
        return { isPending, isError, data, tl: data.data.length }
    } else {

        return { isPending: true, isError: false, data: [], tl: 0 }
    }
}

export default useSlips