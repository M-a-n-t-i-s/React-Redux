import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "809bd7bf-b1d9-4393-8ffa-0951a1166b10"
    }
});
export const usersAPI= {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
    },
    follow  (id) {
        return instance.post(`follow/` + id, {}).then(res => res.data)
    },
    unfollow  (id)  {
        return instance.delete(`follow/${id}`).then(res => res.data)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI= {

    getProfile(userId){

        return instance.get(`profile/` + userId).then(res => res.data)
    },
    getStatus(userId=28689){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{
            status:status
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(res=> res.data);
    },
    login(email,password, rememberMe=false) {
        return instance.post('auth/login',{
            email,password, rememberMe
        });
    },
    logout() {
        return instance.delete('auth/login');
    }
}









