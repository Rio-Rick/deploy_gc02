import { useEffect, useState } from "react"
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import FormPatch from "./FormPatch";

export default function Table({ product, index,fetchProducts, newId}) {
    function currencyFormat(num) {
        return 'Rp ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    // console.log(product);
    const[pictureUrl, setPictureUrl] = useState("")
    const [newerId, setNewId] = useState(0)
 
    // setProductItem(product.imgUrl)
    const navigate = useNavigate()

    function handleEdit(id) {
        navigate(`/cuisine/edit/${id}`)
    }

    function handlePatch(id) {
        navigate(`/cuisine/patch/${id}`)
    }
    // async function fetchProductById() {
    //     try {
    //          const token = localStorage.access_token
    //         const url = 'https://phase2-aio.vercel.app'
    //         const { data } = await axios.get(`${url}/apis/restaurant-app/cuisines/${product.id}`,{
    //             headers: { Authorization: `Bearer ${token}`}
    //         })

    //         setProductItem(data.data)
    //         console.log(productItem);
    //     } catch (error) {
    //         Swal.fire({
    //             icon: "error",
    //             title: error.response.data.error,
    //           });
    //     }
    // }
    async function handleDelete(id) {
        const token = localStorage.access_token
        // console.log(id);
        // navigate(`/cuisine/delete/${id}`)
        
        try {
            const url = 'https://phase2-aio.vercel.app'
            await axios.delete(`${url}/apis/restaurant-app/cuisines/${id}`, {
                headers: { Authorization: `Bearer ${token}`}
           }) 
        //    console.log(data);
           fetchProducts()
        //    redirect('/')
           navigate('/')
           Swal.fire({
            icon: "success",
            title: "Success delete",
        });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.response.data.error,
            });
        }
    }
    // async function handlePatch() {
    //     // console.log(id);
    //     // navigate(`/cuisine/delete/${id}`)
    //     // e.preventDefault()
    //     try {
    //         // console.log(id);
    //         // console.log(product.id);
    //         // console.log(file);
    //         // console.log(newId);
    //         if(!file) {
    //             Swal.fire({
    //                 icon: "error",
    //                 title: "no file selected",
    //             });
    //         }
    //         const token = localStorage.access_token
    //         // console.log(token);
    //         const url = 'https://phase2-aio.vercel.app'
    //         // console.log(imgUrl);
    //         const fd = new FormData();
    //         fd.append('file', file)
    //         console.log(file);
    //     //     await axios.patch(`${url}/apis/restaurant-app/cuisines/${id}`,fd, {
    //     //         headers: { Authorization: `Bearer ${token}`}
    //     //    }) 
    //     //    console.log(data);
    //     //    fetchProducts()
    //     //    redirect('/')
    //     //    navigate('/')
    //        Swal.fire({
    //         icon: "success",
    //         title: "Success Updated",
    //     });
    //     } catch (error) {
    //         console.log(error);
    //         Swal.fire({
    //             icon: "error",
    //             title: error.response.data.error,
    //         });
    //     }
    // }

    // useEffect(() => {
    //     if(setPictureUrl) {
    //         fetchProducts()
    //     }
    // },[])
    // useEffect(() => {
    //     // setPictureUrl(productItem.imgUrl)
    //         // fetchProducts()
    //     setNewId(product.id)
    // },[])


    // function popUpInput() {
    //     return (
    //         <>

    //         </>
    //     )
    // }

    // function handleChange (event) {
    //     setPictureUrl(event.target.value)
    // }
    // console.log(product.id);    
    return (
        <> 
            <tbody>
                {/* row 1 */}
                <tr>
                    <td>
                        {index + 1}
                    </td>
                    <td>
                        <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={product.imgUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{product.name}</div>
                        <div className="text-sm opacity-50">User : {product.User.username}</div>
                        </div>
                    </div>
                    </td>
                    <td>
                        <p>{product.description}</p>
                    </td>
                    <td>{currencyFormat(product.price)}</td>
                    <th>
                    {/* <button className="btn btn-ghost btn-xs" onClick={popUpInput}>Patch</button> */}
                    {/* <button className="btn btn-ghost btn-xs" onClick={(e)=>{
                        // fetchProductById(product.id)
                        // setPictureUrl(productItem.imgUrl)
                        // console.log(productItem.imgUrl);
                        // setPictureUrl(product.imgUrl)
                        // console.log(product.id);
                        // console.log(newId);
                        // setNewId(product.id)
                        // e.preventDefault()

                        // return (
                        //     <>
                        //         <FormPatch handlePatch={handlePatch} setFile={setFile} />
                        //     </>
                        // )
                        }}>Patch</button> */}
                       {/* <label htmlFor="my_modal_7" className="btn btn-ghost btn-xs">Patch</label> */}

                        {/* Put this part before </body> tag */}
                        {/* <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                        <div className="modal" role="dialog">
                        <div className="modal-box">
                            <h3 className="text-lg font-bold">Choose file to update img url {product.id}!</h3>
                            <p className="py-4">This modal works with a hidden checkbox!</p>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                        </div> */}

                    <button className="btn btn-ghost btn-xs" onClick={() => handlePatch(product.id)}>Patch</button>
        
                    <button className="btn btn-ghost btn-xs" onClick={() => handleEdit(product.id)}>Edit</button>
                    {/* <p>{product.id}</p> */}
                    <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(product.id)} >Delete</button>
                    </th>
                </tr>
            </tbody>
        </>
    )
}