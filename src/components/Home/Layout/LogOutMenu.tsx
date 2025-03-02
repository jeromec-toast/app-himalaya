import { useNavigate } from "react-router-dom"

export const LogOutMenu = () => {
    const navicate = useNavigate()
    const goToLogin = () => {
        navicate(`/login`, {})
    }

    const goRegister = () => {
        navicate(`/register`, {})
    }

    return (
        <>
            <button onClick={goToLogin} type='button'
                className="bg-transparent border-2 border-gray-300 hover:border-black rounded px-4 py-2 mt-4 text-sm text-black font-semibold mr-2">Login
            </button>
            <button type='button' onClick={goRegister}
                className="bg-transparent border-2 border-gray-300 hover:border-black rounded px-4 py-2 mt-4 text-sm text-black font-semibold">Sign In
            </button>
        </>
    )
}