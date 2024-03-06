import { useQuery } from "@tanstack/react-query";
import { FETCH_QUERIES_API } from '../config/apis';
import useApiResult from "./useApiResult";

const useQueries = () => {

    var { isPending, isError, data } = useQuery({
        queryKey: ['queriesFetch'],
        queryFn: () => fetch(FETCH_QUERIES_API).then((res) => res.json())
    })

    var result = useApiResult('HomeTP', isPending, isError, data);    
    return result;
}

export default useQueries