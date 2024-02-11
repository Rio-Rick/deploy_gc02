import Card from "./Card"
import Swal from 'sweetalert2'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Outlet, useSearchParams, useLocation } from "react-router-dom";

export default function Home() {
  
    // console.log(searchCategory);
    const[page, setPage] = useState(1)
    const[products, setProducts] = useState([])
    const[categories, setCategoiries] = useState([])

    const[loading, setLoading] = useState(false)
    const[limit, setLimit] = useState(9)
    const[totalPage, setTotalPage] = useState(0)
    const[currentPage, setCurrentPage] = useState(0)


    const [search, setSearch] = useState("")
    const [searchCategory, setCategorySearch] = useState("")
    const [order, setOrder] = useState("ASC")
    // console.log(search);
    // const params = useLocation();
    // console.log(params.state);
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get('q'));
    const url = 'https://phase2-aio.vercel.app'
    // const { categorySearching, search, setOrdering } = params

    // function searchOnCategory(event) {
    //   event.preventDefault();
    //   let newSearchCategory = event.target.value
    //   setCategorySearch(newSearchCategory)
    // }

    // function setOrdering(event) {
    //   event.preventDefault();
    //   let orders = event.target.value
    //   setOrder(orders)
    // }



    async function fetchProducts() {
      try {
          setLoading(true)
        //   setSearch(search)
          const { data } = await axios.get(`${url}/apis/pub/restaurant-app/cuisines?q=${search}&i=${searchCategory}&limit=${limit}&page=${page}&sort=${order}`)
          // console.log(data.data.pagination.totalPage);
          // console.log(data);
          setProducts(data.data.query);
          setCurrentPage(data.data.pagination.currentPage)
          setTotalPage(data.data.pagination.totalPage)
        //   console.log(data.result.data.query);
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: error.response.data.error,
          });
        } finally {
          setLoading(false)
        }
    }
    async function fetchCategory() {
      try {
          setLoading(true)
          const { data } = await axios.get(`${url}/apis/pub/restaurant-app/categories`)
          setCategoiries(data.data)
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: error.response.data.error,
          });
        } finally {
          setLoading(false)
        }
    }


      // if(params.state !== null) {
      //   // console.log(products);
      //   setCategorySearch(JSON.stringify(params.state.categorySearching))
      //   setOrder(JSON.stringify(params.state.setOrdering))
      // }
    useEffect(()=> {
      // console.log(searchParams.get('i'));  
      console.log(search);
      if(searchParams.get('q') || searchParams.get('q') === "") {
        setSearch(searchParams.get('q'))  
      }
      if(searchParams.get('i') || searchParams.get('i') === "") {

        setCategorySearch(searchParams.get('i'))
      }
      if(searchParams.get('o')) {
        setOrder(searchParams.get('o'))
      }
      // console.log(searchParams.get('i'));
      // setCategorySearch(searchParams.get('i'))
      // console.log(params.state.categorySearching);
      // setCategorySearch(JSON.stringify(params.state.categorySearching))
      // if(searchParams.size !== 0){
        // setOrder(searchParams.get('o'))
      // }
      // // console.log("bakso");
      // fetchProducts();

    }, [searchParams.toString(), page])

    useEffect(() => {
      fetchCategory();
    },[])

    useEffect(() => {
        fetchProducts();
        setPage((page) => page = 1)
    }, [search, searchCategory, order])
    
    useEffect(() => {
        fetchProducts();
    }, [page])
    
    // useEffect(() => {
    //     fetchProducts();
    // }, [page])

    return (
        <>
        {/* categories
        <div className="flex gap-5"> */}
          {/* <div className="flex-none mt-3 z-[1]">
                <details>
                    <summary className="btn">
                      Categories
                    </summary>
                  <select className="p-2 bg-base-100 rounded-t-none" onChange={searchOnCategory} >
                    <option value="">All</option>
                    {categories.map(category => {
                      return <option value={category.name} key={category.id}> {category.name} </option>
                    })}
                  </select>
                </details>
          </div> */}
          {/* order */}
          {/* <div className="flex-none mt-3 z-[1]">
                <details>
                    <summary className="btn">
                      Order By
                    </summary>
                  <select className="p-2 bg-base-100 rounded-t-none" onChange={setOrdering} >
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                  </select>
                </details>
          </div> */}
        {/* </div> */}
        {/* cuisine */}
        <div id="PAGE-HOME" className="p-2"> 
            <main className="grid grid-cols-2 gap-5 px-0 my-2">
                {products.map(product => {
                    return <Card key={product.id} product={ product } />
                })}
            </main>
        </div >
        {/* page */}
        <div>
        <div className="join">
          <button className="join-item btn" onClick={() => setPage((page) => page === 1 ? page + 0 : page - 1)}>«</button>
          <button className="join-item btn">Page {page}</button>
          <button className="join-item btn" onClick={() => setPage((page) => currentPage < totalPage ? page + 1 : page + 0 )}>»</button>
        </div>
        </div>
        <Outlet/>
        </>
    )
}
