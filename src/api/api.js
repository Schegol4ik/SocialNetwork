import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "bb1bcaee-5836-494b-8da8-f35ce47cf899"
        }
    }
)

export const UserAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    controlFollowed: {
        getFollow(userId) {
            return instance.post(`follow/${userId}`)
        },
        getUnfollow(userId) {
            return instance.delete(`follow/${userId}`)
        }
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            /*this.props.setUserProfile(response.data)*/
           /* return response.data;*/
    }
}

export const authAPI = {
    getLogin() {
        return instance.get(`auth/me`)
        /*.then(response => {
                 if (response.data.resultCode === 0) {
                 let {id, email, login} = response.data.data
             }
         });*/
    }
}