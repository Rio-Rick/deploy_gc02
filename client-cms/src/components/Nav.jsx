import { NavLink, useNavigate } from "react-router-dom"

export default function Nav({setPage}) {
    const navigate = useNavigate()
    function handleLogout(event) {
        event.preventDefault()
        localStorage.clear()
        navigate('/login')
    }
    return (
        <>
            {/* <div className="navbar bg-base-100 rounded-box">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Home</a>
            </div>
            <ul tabIndex={0} className="menu menu-sm  mt-3 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 3</a></li>
            </ul>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div>
                    <a onClick={handleLogout}>
                        <button className="btn">
                            Log out
                        </button>
                    </a>
                </div>
            </div>
            </div> */}
            <div className="navbar bg-base-100 rounded-box" >
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Cuisine</a></li> 
                    <li><a>Create Cuisine</a></li>
                    <li><a>Category</a></li>
                </ul>
                </div>

                <div className="navbar-start">
                    {/* <a className="btn btn-ghost text-xl">Home</a> */}

                            <NavLink
                                to="/"
                                className="btn btn-ghost text-xl"
                            >
                                Home
                            </NavLink>
                            {/* <a>Cuisine</a> */}

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({isActive, isPending}) => {
                                    isPending ? "pending" : isActive ? "active" : ""
                                }}
                            >
                                Cuisine
                            </NavLink>
                            {/* <a>Cuisine</a> */}
                        </li>
                        <li>
                            <NavLink
                                to="/addCuisine"
                                className={({isActive, isPending}) => {
                                    isPending ? "pending" : isActive ? "active" : ""
                                }}
                            >
                            Create Cuisine
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/categories"
                                className={({isActive, isPending}) => {
                                    isPending ? "pending" : isActive ? "active" : ""
                                }}
                            >
                                Category
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <div className="navbar-center hidden lg:flex">
                        <NavLink
                            to="/add-user"
                            className={({isActive, isPending}) => {
                                isPending ? "pending" : isActive ? "active" : ""
                            }}
                        >
                            Add-User
                        </NavLink>
                    </div>
                    <a className="btn" onClick={handleLogout}>Log out</a>
                </div>
            </div>
        </>
    )
}

