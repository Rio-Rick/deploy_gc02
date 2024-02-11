import axios from "axios";
import Swal from "sweetalert2";
import TableCategory from "../components/TableCategory";
import { useState } from "react";
import { useEffect } from "react";  

export default function CategoryPage() {
    const token = localStorage.access_token
    const[products, setProducts] = useState([])
    const url = 'https://phase2-aio.vercel.app'
    async function fetchProducts() {
        try {

          const { data } = await axios.get(`${url}/apis/restaurant-app/categories`, {
            headers: { Authorization: `Bearer ${token}`}
          });          
          setProducts(data.data);
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: error.response.data.error,
          });
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

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
                              Name
                            </div>      
                                         
                          </div>
                        </th>
                        <th>
                            <div>
                                created At
                            </div>
                        </th>
                    </tr>
                  </thead>
                {products.map((product, index )=> {
                    return <TableCategory key={product.id} product={ product } index = {index}/>
                })}
                </table>
              </div>
            </main>
        </div >
        </>
    )
}