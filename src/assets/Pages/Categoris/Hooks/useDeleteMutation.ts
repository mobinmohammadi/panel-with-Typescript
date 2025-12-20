import { CategoryApi } from "@/Services/Category/Category";
import { useMutation, useQueryClient } from "@tanstack/react-query";



export function useDeleteMutation(){
const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn : (id : number) => CategoryApi.deleteCategory(id),
        onSuccess : (data) => {
            console.log("seccussFully Delete " , data);
            queryClient.invalidateQueries({queryKey : ["categoris"]})
            
        },
          onError : (error) => {
            console.log("seccussFully Delete " , error);
            
        }
        
    })
    return mutation
}