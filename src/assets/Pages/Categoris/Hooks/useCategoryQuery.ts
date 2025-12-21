import { CategoryApi } from "@/Services/Category/Category";
import { useQuery } from "@tanstack/react-query";

export function useCategoryQuery(){
    const { data , error , isPending  , isLoading  } = useQuery({
        queryKey : ["categoris"],
        queryFn : CategoryApi.getCategory
    })

    return {data , error , isPending , isLoading}
} 