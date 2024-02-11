import { useEffect, useState } from "react";
import Home from "./Home";
import Swal from 'sweetalert2'
import axios from 'axios'
import { Outlet, useNavigate, useSearchParams, Link } from "react-router-dom";
// const [search, setSearch] = useState('')

export default function Nav() {
  const[filter, setFilter] = useState({
    search : "",
    searchCategory : "",
    order : "ASC"
  })

  const[categories, setCategoiries] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const url = 'https://phase2-aio.vercel.app'

  const navigate = useNavigate();


  function filtering(event) {
    event.preventDefault()
    // let newSearch = event.target.value;
    // let newSearchCategory = event.target.value
    // let order = event.target.value
    const { name, value } = event.target
    if (name === 'search') {
      searchParams.set('q', value)
    }
    if (name === 'searchCategory') {
      searchParams.set('i', value)
    }
    if (name === 'order') {
      searchParams.set('o', value)
    }
    setSearchParams(searchParams)

    // setFilter({
    //   ...filter,
    //   [name] : value
    // })
  }

  // function searchOnChange(event) {
  //   event.preventDefault();
  //   let newSearch = event.target.value;


  //   navigate(
  //     "/",
  //     {
  //       state : {
  //         search : newSearch
  //       }
  //     }
  //   )
  //   // searchParams.append('q', newSearch)
  //   // navigate(`?${searchParams.toString()}`)
  // }

  // function searchOnCategory(event) {
  //   event.preventDefault();
  //   let newSearchCategory = event.target.value
  //   // let searchParams = new URLSearchParams();
  //   // searchParams.append('i', newSearchCategory)
  //   // navigate(`?${searchParams.toString()}`)
  //   navigate(
  //     '/',
  //     {
  //       state : {
  //         categorySearching : newSearchCategory
  //       }
  //     }
  //   )
  // }

  // function setOrdering(event) {
  //   event.preventDefault();
  //   let order = event.target.value
  //   // let searchParams = new URLSearchParams();
  //   // searchParams.append('o', order)

  //   // navigate(`?${searchParams.toString()}`)
  //   // setOrder(order)
  //   navigate(
  //     '/',
  //     {
  //       state : {
  //         setOrdering : order
  //       }
  //     },
  //   )
  // }    
  
  async function fetchCategory() {
    try {
        const { data } = await axios.get(`${url}/apis/pub/restaurant-app/categories`)
        console.log(data);
        setCategoiries(data.data)
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.error,
        });
      }
  }
  useEffect(() => {
    fetchCategory();
  },[])


  return (
        <>
            <div className="navbar bg-base-200 rounded-box" >
              <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">         
                 Home
                </Link>
              </div>
              <div className="flex-none gap-2">
                <div className="form-control">
                  <form action="" method="get" >
                    <input type="text" placeholder="Search" name="search" className="input input-bordered w-24 md:w-auto" onChange={filtering} />  
                  </form>
                </div>
              </div>
          {/* categories */}
              <div className="flex gap-5">
                <div className="flex-none mt-3 z-[1]">
                      <details>
                          <summary className="btn">
                            Categories
                          </summary>
                        <select name="searchCategory" className="p-2 bg-base-100 rounded-t-none" onChange={filtering} >
                          <option value="">All</option>
                          {categories.map(category => {
                            return <option value={category.name} key={category.id}> {category.name} </option>
                          })}
                        </select>
                      </details>
                </div>
                {/* order */}
                <div className="flex-none mt-3 z-[1]">
                      <details>
                          <summary className="btn">
                            Order By
                          </summary>
                        <select name="order" className="p-2 bg-base-100 rounded-t-none" onChange={filtering} >
                          <option value="ASC">ASC</option>
                          <option value="DESC">DESC</option>
                        </select>
                      </details>
                </div>
              </div>
            </div>
            <Outlet />
        </>
    )
}