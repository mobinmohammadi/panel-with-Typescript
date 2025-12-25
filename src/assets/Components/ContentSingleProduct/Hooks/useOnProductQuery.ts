import { ProductsApi } from "@/Services/Products/ProductsApi";
import { useQuery } from "@tanstack/react-query";

export function useOnProductQuery (id: number){
    return useQuery({
        queryKey : ["onsProduct" , id],
        queryFn : () => ProductsApi.getOnProduct(id)
    })
}