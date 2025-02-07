import { Container } from "@/components/front/Container"
import { SectionTitle } from "@/components/front/SectionTitle"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router"
import { useForm , SubmitHandler } from "react-hook-form"
import { authRegister } from "@/services/apiAuthUser"
import { RegisterData } from "@/types/user"
import Swal from 'sweetalert2'

export default function Register() {

  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Register | WindReact"
  }, [])

  // Create useForm hook
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterData>()

  const onSubmit: SubmitHandler<RegisterData> = (data) => {
    // console.log(data)

    // ข้อมูลที่จะส่งไปยัง API
    const userData = {
      "username": data.username,
      "password": data.password,
      "fullname": data.fullname,
      "email": data.email,
      "tel": data.tel
    }

    // ส่งข้อมูลไปยัง API
    authRegister(userData).then((response) => {
      console.log(response)

      // แสดงข้อความแจ้งเตือนว่า Register สำเร็จ
      Swal.fire({
        title: "Register สำเร็จ",
        icon: "success",
        draggable: true,
        timer: 2000,
      });

      // หน่วงเวลา 2 วินาที แล้ว redirect ไปหน้า Dashboard
      setTimeout(() => {
        navigate('/login')
      }, 2000)

    }).catch((error) => {
      Swal.fire({
        icon: "error",
        title: "มีข้อผิดพลาด",
        text: "กรุณาตรวจสอบข้อมูลให้ถูกต้อง",
        timer: 2000,
      });
      console.error(error)
    })

  }

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Container>
        {/* Back to Home Button */}
        <div className="py-4 flex justify-center">
          <Link 
            to="/" 
            className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="flex min-h-[80vh] items-center justify-center flex-col space-y-4">
          <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-lg">
            <div>
              <SectionTitle
                preTitle="Create account"
                title="Sign Up"
                align="center"
              >
              </SectionTitle>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 rounded-md">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    <input
                      {...register("username", {
                        required: true
                      }
                      )}
                      id="username"
                      name="username"
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    />
                    {errors.username && <span className="text-red-500">This field is required</span>}
                </div>
                <div>
                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-2">
                      Fullname
                    </label>
                    <input
                      {...register("fullname", {
                        required: true
                      }
                      )}
                      id="fullname"
                      name="fullname"
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    />
                    {errors.fullname && <span className="text-red-500">This field is required</span>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email address
                  </label>
                  <input
                    {...register("email", {
                      required: true
                    }
                    )}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  />
                  {errors.email && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                    <label htmlFor="tel" className="block text-sm font-medium text-gray-700 mb-2">
                      Tel
                    </label>
                    <input
                      {...register("tel", {
                        required: true
                      }
                      )}
                      id="tel"
                      name="tel"
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    />
                    {errors.tel && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: true
                    }
                    )}
                    id="password"
                    name="password"
                    type="password"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  />
                  {errors.password && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                  <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    {...register("confirm_password", {
                      required: true,
                      // validate password match
                      validate: value => value === watch('password') || "The passwords do not match"
                    }
                    )}
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  />
                  {(errors.confirm_password && errors.confirm_password?.type !== "validate") && <span className="text-red-500">This field is required</span>}
                  {errors.confirm_password?.type === "validate" && <span className="text-red-500">{errors.confirm_password.message}</span>}
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the <Link to="/terms" className="text-indigo-600 hover:text-indigo-500">Terms</Link> and <Link to="/privacy" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</Link>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Create Account
                </button>
              </div>

              <div className="text-center text-sm">
                <span className="text-gray-600">Already have an account? </span>
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}