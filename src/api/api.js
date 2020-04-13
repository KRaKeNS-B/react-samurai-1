import Axios from 'axios'

const axiosInstance = Axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'b7b61a1f-cfd6-43d9-8a8f-04bd565996dd',
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },

  follow(userId) {
    return axiosInstance.post(`follow/${userId}`)
      .then(response => response.data)
  },

  unfollow(userId) {
    return axiosInstance.delete(`follow/${userId}`)
      .then(response => response.data)
  },
  
  getUserProfile(userId) {
    return axiosInstance.get(`profile/${userId}`)
  }
}
