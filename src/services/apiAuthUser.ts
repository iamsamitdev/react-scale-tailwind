import axios from 'axios'

import { UserResponse, LoginData } from '@/types/user'

import { API_LOCAL_CONFIG } from '@/constants/config'

const api = axios.create({
    baseURL: API_LOCAL_CONFIG.BASE_URL,
    timeout: API_LOCAL_CONFIG.TIMEOUT,
})

// สร้าง login ฟังก์ชันที่รับข้อมูล username และ password และส่งไปยัง API
const authLogin = (data: LoginData) => {
    return api.post<UserResponse>('/users/login', data , {
        headers: {
            'Content-Type': 'application/json',
            'Accept': "application/json",
        },
    })
}

export { authLogin }