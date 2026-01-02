import { CopansApi } from "@/Services/CopansApi/CopansApi"
import { useQuery } from "@tanstack/react-query"
import { reach } from "yup"

export const useQueryOffers = () => {
    const {data , isLoading , isError} = useQuery({
        queryKey : ['copans'],
        queryFn : () => CopansApi.getAllCopans()
        
    })

    return {data , isLoading , isError}
}