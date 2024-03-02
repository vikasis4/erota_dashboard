import { useQuery } from "@tanstack/react-query";
import { FETCH_USERS_API } from '../config/apis'

const useUser = () => {

    var { isPending, isError, data } = useQuery({
        queryKey: ['usersFetch'],
        queryFn: () => fetch(FETCH_USERS_API).then((res) => res.json())
    })

    if (!isPending && data.status == 'true') {
        return { isPending, isError, data: data.data, tl: data.data.length }
    } else if (!isPending && data.status == 'false') {
        return { isPending: false, isError: true, data: [], tl: 0 }
    } else {
        return { isPending: true, isError: false, data: [], tl: 0 }
    }

}

export default useUser