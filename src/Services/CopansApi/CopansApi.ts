import { axiosClient } from "../AxiosClient"

export const CopansApi = {
    getAllCopans() {
        const url = "coupons"
        return axiosClient.get(url)
    },
      createCoupans(data : ICoupans) {
        const url = "coupons"
        return axiosClient.post(url , data)
    }
}