import { useEffect, useState } from "react"
import { redirect, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function FormPatch() {
    const token = localStorage.access_token

    const [file, setFile] = useState(null);
    const [product, setProduct] = useState([]);
    const url = 'https://phase2-aio.vercel.app'

    const navigate = useNavigate()
    const { id } = useParams()

    async function fetchProduct() {
        try {
            const { data } = await axios.get(`${url}/apis/restaurant-app/cuisines/${id}`,{
                headers: { Authorization: `Bearer ${token}`}
            })

            setProduct(data.data)
            console.log(data);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.response.data.error,
              });
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [])
    // return (
    //     <dialog id={product.id} className="modal">
    //     <div className="modal-box">
    //         <h3 className="font-bold text-lg">Update image url {newId} {product.id} {newerId} </h3>
    //         <div className="modal-action ">
    //         </div>
    //         <form className="font-bold text-lg" method="dialog" >
    //             {/* if there is a button in form, it will close the modal */}
    //             {/* <input
    //                 type="text"
    //                 name="imgUrl"
    //                 id="imgUrl"
    //                 className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
    //                 placeholder="Enter your img url"
    //                 onChange={handleChange}
    //             /> */}
    //             <input onChange={(e) => { setFile(e.target.files[0]) }} type="file" className="file-input w-full max-w-xs" />
    //             <button className="btn" onClick={() => handlePatch()} >Edit</button>
    //             {/* // handlePatch(product.id) */}
    //             {/* <form method="dialog"> */}
    //                 {/* if there is a button in form, it will close the modal */}
    //                 {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    //             </form> */}
    //             <button className="btn" >Close</button>
    //             {/* <p>{pictureUrl}</p> */}
    //         </form>
    //     </div>
    // </dialog>
    // )
    async function handlePatch() {
        // console.log(id);
        // navigate(`/cuisine/delete/${id}`)
        // e.preventDefault()
        try {
            // console.log(id);
            // console.log(product.id);
            // console.log(file);
            // console.log(newId);
            if(!file) {
                Swal.fire({
                    icon: "error",
                    title: "no file selected",
                });
            }
            const token = localStorage.access_token
            // console.log(token);
            const url = 'https://phase2-aio.vercel.app'
            // console.log(imgUrl);
            const fd = new FormData();
            fd.append('file', file)
            console.log(file);
            await axios.patch(`${url}/apis/restaurant-app/cuisines/${id}`,fd, {
                headers: { Authorization: `Bearer ${token}`}
           }) 
        //    console.log(data);
        //    fetchProducts()
        //    redirect('/')
           navigate('/')
           Swal.fire({
            icon: "success",
            title: "Success Updated",
        });
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: error.response.data.error,
            });
        }
    }

    return (
        <>
            {/* component */}
            {/* <div className="fixed z-10 top-0 w-full h-full flex bg-black bg-opacity-60">
                <div className="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
                <div
                    className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg"
                    style={{ width: 450 }}
                >
                    <svg
                    className="text-indigo-500 w-24 mx-auto mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                    </svg>
                    <div className="input_field flex flex-col w-max mx-auto text-center">
                    <label>
                        <input
                        className="text-sm cursor-pointer w-36 hidden"
                        type="file"
                        multiple=""
                        />
                        <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                        Select
                        </div>
                    </label>
                    <div className="title text-indigo-500 uppercase">
                        or drop files here
                    </div>
                    </div>
                </div>
                </div>
            </div> */}

            <div className="fixed z-10 top-0 w-full h-full flex bg-black bg-opacity-60">
                <div className="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
                    <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg" style={{ width: 450  }}>
                        <h1 className="text-xl font-bold text-black capitalize dark:text-black">{product.name}</h1>
                        {/* <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg> */}
                        <div>
                            <img src={product.imgUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                        <div className="input_field flex flex-col w-max mx-auto text-center">
                            <label>
                                {/* <input className="text-sm cursor-pointer w-36 hidden" onChange={(e) => { setFile(e.target.files[0]) }} type="file" /> */}
                                <input onChange={(e) => { setFile(e.target.files[0]) }} type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                            </label>
                                <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500" onClick={() => handlePatch()}>Update</div>
                                <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500" onClick={() => navigate('/')} >Cancel</div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}