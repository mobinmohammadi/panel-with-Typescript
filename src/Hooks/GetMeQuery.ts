import { AuthApi } from "@/Services/APi/Auth"
import { useQuery } from "@tanstack/react-query"

export const GetMeQuery = () => {
    const getme = useQuery({
        queryKey : ["getme"],
        queryFn : AuthApi.getMe,
        retry : 1
    })

    return getme
}