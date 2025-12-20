import { axiosClient } from "../AxiosClient"

export const DashboardApi = {
    getInfo(){
        const url = "dashboard"
        return axiosClient.get(url)
    }
}