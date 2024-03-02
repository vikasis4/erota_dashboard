import { useQuery } from "@tanstack/react-query";
import { FETCH_QUERIES_API } from '../config/apis'

const useQueries = () => {

    var { isPending, isError, data } = useQuery({
        queryKey: ['queriesFetch'],
        queryFn: () => fetch(FETCH_QUERIES_API).then((res) => res.json())
    })

    if (!isPending && data.status == 'true') {
        return { isPending, isError, data, tl: data.data.length, pl: data.data.length }
    } else if (!isPending && data.status == 'false') {
        return { isPending: false, isError: true, data: [], tl: 0, pl:0 }
    } else {
        return { isPending: true, isError: false, data: [], tl: 0, pl:0 }
    }
}

export default useQueries