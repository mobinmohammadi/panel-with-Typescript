import { ProductsApi } from "@/Services/Products/ProductsApi";
import { useQuery } from "@tanstack/react-query";

export function useProductsQuery() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: ProductsApi.getProducts
  });

  return data;
}
