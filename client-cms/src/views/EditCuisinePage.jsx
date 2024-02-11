import FormCuisine from "../components/FormCuisine";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";  
import { useNavigate, useParams } from "react-router-dom";


export default function EditCuisinePage () {
    const token = localStorage.access_token
    const[categories, setCategoiries] = useState([])
    const [product, setProduct] = useState([]);

    const url = 'https://phase2-aio.vercel.app'
    const navigate = useNavigate()
    const { id } = useParams()


    async function fetchProductsCategory() {
        try {

          const { data } = await axios.get(`${url}/apis/restaurant-app/categories`, {
            headers: { Authorization: `Bearer ${token}`}
          });          
          setCategoiries(data.data);
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: error.response.data.error,
          });
        }
    }

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
    async function handleSubmit(e, form) {
        e.preventDefault()
        try {

            const { name, price, stock, imgUrl,categoryId, description } = form 
            
            const dataAdded = {name, price : +price, imgUrl,categoryId : +categoryId, description }
            const { data } = await axios.put(`${url}/apis/restaurant-app/cuisines/${id}`,dataAdded, {
                headers : {
                    Authorization : `Bearer ${localStorage.access_token}`
                }
            })
            Swal.fire({
                title: "Data updated",
                icon: "success"
            });
            console.log(data);
            navigate('/')
        } catch (error) {
            if(!form.categoryId) {
                Swal.fire({
                    title: "Category must be choose",
                    icon: "error"
                });
            } else {
                Swal.fire({
                    title: error.response.data.error,
                    icon: "error"
                });
            }
        }
    }

    useEffect(() => {
        fetchProductsCategory();
        fetchProduct();
    }, [])

    return (
        <>
            <FormCuisine productCategory={categories} handleSubmit={handleSubmit} product={product} nameProp="Edit Cuisine"/>
        </>
    )
}