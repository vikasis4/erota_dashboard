import { useQuery } from "@tanstack/react-query";


const useUser = () => {

    var { isPending, status, data } = useQuery({
        queryKey: ['usersFetch'],
        queryFn: () => fetch('http://localhost:3001/api/admin/users').then((res) => res.json())
    })

    

}