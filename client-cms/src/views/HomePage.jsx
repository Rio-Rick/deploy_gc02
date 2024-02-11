import Swal from 'sweetalert2'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Table from "../components/Table"

export default function HomePage() {

    const token = localStorage.access_token
    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(false)
    const[user, setUser] = useState([])
    // console.log(search);
    const url = 'https://phase2-aio.vercel.app'
    async function fetchProducts() {
        try {
          setLoading(true)
        //   setSearch(search)
          const { data } = await axios.get(`${url}/apis/restaurant-app/cuisines`, {
            headers: { Authorization: `Bearer ${token}`}
          });
          // Your session was expired please login again
          setUser(data.data.User)
          setProducts(data.data);
        //   console.log(data.result.data.query);
        } catch (error) {
          // if(error.message === "")c
          // console.log(error);
          Swal.fire({
            icon: "error",
            title: error.response.data.error,
          });
        } finally {
          setLoading(false)
        }

    }

    // async function handleDelete(id) {
    //   const token = localStorage.access_token
    //   // console.log(id);
    //   // navigate(`/cuisine/delete/${id}`)
      
    //   try {
    //       const url = 'https://phase2-aio.vercel.app'
    //       await axios.delete(`${url}/apis/restaurant-app/cuisines/${id}`, {
    //           headers: { Authorization: `Bearer ${token}`}
    //      }) 
    //   //    console.log(data);
    //   //    fetchProduct()
    //   //    redirect('/')
    //      navigate('/')
    //      Swal.fire({
    //       icon: "success",
    //       title: "Success delete",
    //   });
    //   } catch (error) {
    //       Swal.fire({
    //           icon: "error",
    //           title: error.response.data.error,
    //       });
    //   }
    // }
    
    useEffect(() => {
        fetchProducts();
    }, [])
    // console.log(products);
    return (
        <>
        <div id="PAGE-HOME" className="p-2"> 
            <main className="grid grid-cols-1 gap-5 px-0 my-2">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                        <th>No</th>
                        <th>
                          <div className="flex flex-row gap-10">
                            <div>
                              Picture
                            </div>
                            <div>
                              Cuisine
                            </div>                   
                          </div>
                        </th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                  </thead>
                {products.map((product, index )=> {
                    return <Table key={product.id} product={ product } index = {index} newId = {product.id} fetchProducts={fetchProducts} />
                })}
                </table>
              </div>
            </main>
        </div >
        </>
    )
}
