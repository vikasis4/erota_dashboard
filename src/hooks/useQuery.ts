import { useQuery } from "@tanstack/react-query";
import { FETCH_QUERIES_API } from '../config/apis'

const useQueries = () => {

    var { isPending, isError, data } = useQuery({
        queryKey: ['queriesFetch'],
        queryFn: () => fetch(FETCH_QUERIES_API).then((res) => res.json())
    })
    
    if (!isPending) {
        return { isPending, isError, data, tl: data.data.length, pl: data.data.length }
    } else {

        return { isPending: true, isError: false, data: [], tl: 0 }
    }
}

export default useQueries