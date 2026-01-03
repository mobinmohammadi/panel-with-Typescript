import { axiosClient } from "../AxiosClient"

export const CopansApi = {
    getAllCopans() {
        const url = "coupons"
        return axiosClient.get(url)
    },
    
    async createCoupans(data : ICoupans) {
        await new Promise(res => setTimeout(res , 1500))
        const url = "coupons"
        return axiosClient.post(url , data)
    },
     deleteCoupans(name: string) {
        const url = `coupons/${name}`
        return axiosClient.delete(url)
    }
}