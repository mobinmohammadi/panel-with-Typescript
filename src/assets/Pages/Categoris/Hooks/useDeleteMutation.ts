import { CategoryApi } from "@/Services/Category/Category";
import { useMutation } from "@tanstack/react-query";

export function useDeleteMutation(){
    const mutation = useMutation({
        mutationFn : (id : number) => CategoryApi.deleteCategory(id),
        onSuccess : (data) => {
            console.log("seccussFully Delete " , data);
            
        },
          onError : (error) => {
            console.log("seccussFully Delete " , error);
            
        }
        
    })
    return mutation
}