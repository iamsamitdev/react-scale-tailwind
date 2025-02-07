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

export interface RegisterData {
    username: string
    password: string
    confirm_password?: string
    fullname: string
    email: string
    tel: string
}