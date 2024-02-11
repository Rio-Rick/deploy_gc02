import FormCuisine from "../components/FormCuisine";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";  
import { useNavigate } from "react-router-dom";

export default function AddCuisinePage () {
    const token = localStorage.access_token
    const[categories, setCategoiries] = useState([])
    const url = 'https://phase2-aio.vercel.app'

    const navigate = useNavigate()

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

    // async function handleSubmit(e, name, price, stock, imgUrl,categoryId, description) {
    async function handleSubmit(e, form) {
        e.preventDefault()
        try {

            const { name, price, stock, imgUrl,categoryId, description } = form 
            
            const dataAdded = {name, price : +price, imgUrl,categoryId : +categoryId, description }
            const { data } = await axios.post(`${url}/apis/restaurant-app/cuisines`,dataAdded, {
                headers : {
                    Authorization : `Bearer ${localStorage.access_token}`
                }
            })
            console.log(data);
            navigate('/')
        } catch (error) {
            // console.log(form.categoryId);
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
    }, [])

    return (
        <>
            <FormCuisine productCategory={categories} handleSubmit={handleSubmit} nameProp="Add Cuisine"/>
        </>
    )
}