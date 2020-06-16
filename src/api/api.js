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
}

export const profileAPI = {
  getUserProfile(userId) {
    return axiosInstance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return axiosInstance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return axiosInstance.put(`profile/status`, { status })
  },
  savePhoto(photoFile) {
    const formData = new FormData()
    formData.append('image', photoFile)
    return axiosInstance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile) {
    return axiosInstance.put(`profile`, profile)
      .then(response => response.data)
  },
}

export const authAPI = {
  authUser() {
    return axiosInstance.get(`auth/me`)
      .then(response => response.data)
  },
  login(email, password, rememberMe = false, captcha = null) {
    return axiosInstance.post(`auth/login`, {email, password, rememberMe, captcha})
      .then(response => response.data)
  },
  logout() {
    return axiosInstance.delete(`auth/login`)
      .then(response => response.data)
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    return axiosInstance.get(`security/get-captcha-url`)
      .then(response => response.data)
  },
}
