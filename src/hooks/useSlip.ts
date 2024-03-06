import { useQuery } from "@tanstack/react-query";
import { FETCH_SLIPS_API } from '../config/apis'
import useApiResult from "./useApiResult";

const useSlips = () => {

    var { isPending, isError, data } = useQuery({
        queryKey: ['slipsFetch'],
        queryFn: () => fetch(FETCH_SLIPS_API).then((res) => res.json())
    })

    var result = useApiResult('HomeT', isPending, isError, data);
    return result;
}

export default useSlips