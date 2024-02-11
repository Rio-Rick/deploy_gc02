import Swal from "sweetalert2";
import axios from 'axios';
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email,
        setEmail] = useState("")
    const [password,
        setPassword] = useState("")
    const url = 'https://phase2-aio.vercel.app'
    const navigate = useNavigate()

    async function handleLogin(event) {
        event.preventDefault();
        try {
            let {data} = await axios.post(`${url}/apis/login`, {email, password});
            localStorage.setItem("access_token", data.data.access_token);
            // setPage('home')
            navigate('/')
        } catch (error) {
            console.log(error);
            Swal.fire({icon: "error", title: error.response.data.error})
        }
    }

    return (
        <>
            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            <h1 className="text-4xl font-medium text-red-300">Login</h1>

            <form className="my-10">
                <div className="flex flex-col space-y-5">
                    <label>
                        <p className="font-medium text-slate-700 pb-2">Email address</p>
                        <input name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        <p className="font-medium text-slate-700 pb-2">Password</p>
                        <input name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center" onClick={handleLogin}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span>Login</span>
                    </button>
                </div>
            </form>
        </div>

            {/* <form className="space-y-4">
                <div className="text-center">
                    <label className="label text-center">
                        <span className="text-center">Email</span>
                    </label>
                    <input type="text"  placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onChange={(e) => setEmail(e.target.value)} />
                </div>
    
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password"  placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                        <span className="label-text-alt">Top Right label</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <div className="label">
                        <span className="label-text-alt">Bottom Left label</span>
                        <span className="label-text-alt">Bottom Right label</span>
                    </div>
                    </label>
                <div>
                    <button onClick={handleLogin}>Log in</button>
                </div>
            </form> */}
        </>
    )
}
