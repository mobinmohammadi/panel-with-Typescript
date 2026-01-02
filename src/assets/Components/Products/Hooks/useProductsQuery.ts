import { ProductsApi } from "@/Services/Products/ProductsApi";
import { useQuery } from "@tanstack/react-query";

export function useProductsQuery() {
  const { data , isLoading ,isError } = useQuery({
    queryKey: ["products"],
    queryFn:() =>  ProductsApi.getProducts(),
    retry : 1

  });

  return {data , isLoading ,isError};
}
