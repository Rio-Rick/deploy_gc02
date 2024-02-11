
import { useState } from "react";
import{Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function RegisterPage() {
    // const token = localStorage.access_token
    const url = 'https://phase2-aio.vercel.app'
    const navigate = useNavigate()
    
    const[form, setForm] = useState({
        username : "",
        email : "",
        password : "",
        address : "",
        phoneNumber : ""
    })

    async function handleSubmit(e, form) {
        e.preventDefault()
        try {
            const url = 'https://phase2-aio.vercel.app'


            const { username, email, password, address, phoneNumber } = form 
            
            const dataAdded = {username, email, password, address, phoneNumber}
            // console.log(dataAdded);
            const{data} = await axios.post(`https://phase2-aio.vercel.app/apis/add-user`,dataAdded, {
                headers : {
                    Authorization : `Bearer ${localStorage.access_token}`
                }
            })
            // console.log(data);  
            navigate('/')
        } catch (error) {
                console.log(error);
            // console.log(form.categoryId);
                Swal.fire({
                    title: error.response.data.error,
                    icon: "error"
                });
        }
    }

    function handleChange(event) {
        const {name, value} = event.target
        setForm({
            ...form,
            [name] : value
        })
    }

    console.log(form);
    return (
        <>
            <div className="p-8 rounded border border-gray-200 bg-blue-100">
                <h1 className="font-medium text-3xl">Add User</h1>
                <form >
                    <div className="mt-8 grid lg:grid-cols-2 gap-4">
                        <div>
                            <label
                            htmlFor="username"
                            className="text-sm text-gray-700 block mb-1 font-medium"
                            >
                            Username
                            </label>
                            <input
                            type="text"
                            name="username"
                            id="username"
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Enter your Username"
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            
                            <label
                            htmlFor="email"
                            className="text-sm text-gray-700 block mb-1 font-medium"
                            >
                            Email Adress
                            </label>
                            <input
                            type="text"
                            name="email"
                            id="email"
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="yourmail@provider.com"
                            onChange={handleChange}

                            />
                        </div>
                        <div>
                            
                            <label
                            htmlFor="password"
                            className="text-sm text-gray-700 block mb-1 font-medium"
                            >
                            Password
                            </label>
                            <input
                            type="password"
                            name="password"
                            id="password"
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="(ex. bakso123)"
                            onChange={handleChange}

                            />
                        </div>
                        <div>
                            
                            <label
                            htmlFor="address"
                            className="text-sm text-gray-700 block mb-1 font-medium"
                            >
                            Address
                            </label>
                            <input
                            type="text"
                            name="address"
                            id="address"
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="(ex. wakanda)"
                            onChange={handleChange}

                            />
                        </div>
                        <div>
                            
                            <label
                            htmlFor="phoneNumber"
                            className="text-sm text-gray-700 block mb-1 font-medium"
                            >
                            Phone Number
                            </label>
                            <input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="your number phone"
                            onChange={handleChange}

                            />
                        </div>
                    </div>
                    <div className="space-x-4 mt-8">
                        <button
                            type="submit"
                            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
                            onClick={(e) => handleSubmit(e, form)}
                        >
                            Save
                        </button>
                        {/* Secondary */}
                        <Link to="/" className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
                            Cancel                 
                        </Link>
                    </div>
                </form>
            </div>

        </>
    )
}