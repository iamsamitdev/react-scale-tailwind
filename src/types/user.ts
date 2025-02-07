export interface UserResponse {
    accessToken: string
    user: {
        id: string
        username: string
        fullname: string
        email: string
        tel: string
    }
}

export interface LoginData {
    username: string
    password: string
}