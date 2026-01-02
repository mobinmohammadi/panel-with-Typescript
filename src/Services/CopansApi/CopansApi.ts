import { axiosClient } from "../AxiosClient"

export const CopansApi = {
    getAllCopans() {
        const url = "coupons"
        return axiosClient.get(url)
    }
}