import { useQuery } from "@tanstack/react-query";
import { FETCH_USERS_API } from '../config/apis'
import useApiResult from "./useApiResult";

const useUser = () => {


    var { isPending, isError, data } = useQuery({
        queryKey: ['usersFetch'],
        queryFn: () => fetch(FETCH_USERS_API).then((res) => res.json())
    })

    var result = useApiResult('HomeT', isPending, isError, data);
    result.data = [{ name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' },{ name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' },{ name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' },{ name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' },{ name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' },{ name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'Randi', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' },{ name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'vikas', email: 'vikas@gmail.com' }, { name: 'Lodu Kumar', email: 'vikas@gmail.com' }]

    var newRes = { ...result, tl: result.data.length }
    return newRes;

}

export default useUser