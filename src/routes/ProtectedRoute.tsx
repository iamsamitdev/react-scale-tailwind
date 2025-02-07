import { ReactNode } from "react"
import { Navigate } from "react-router"

type ProtectedRouteProps = {
    redirectPath: string
    children: ReactNode
}

// อ่าน token จาก localStorage ถ้ามีให้ render children ถ้าไม่มีให้ redirect ไปที่ redirectPath

const token = localStorage.getItem("access_token")

const ProtectedRoute = ({ 
    redirectPath = '/login', 
    children }: ProtectedRouteProps) => {
    return token ? <>{children}</> : <Navigate to={redirectPath} />
}

export default ProtectedRoute