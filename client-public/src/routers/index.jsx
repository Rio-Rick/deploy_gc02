import { createBrowserRouter, redirect } from "react-router-dom";
// import Nav from "../src/components/NavBar";
// import Home from "../src/components/Home";
// import Detail from "../src/components/Detail";
import Nav from "../components/NavBar";
import Home from "../components/Home";
import Detail from "../views/Detail";
// import App from "../src/App";


const router = createBrowserRouter(
    
    [
        {
            path : "/",
            element : <Nav/>,
            children : [
                {
                    path : "/",
                    element : <Home/>
                }
            ]
        },
        {
            path : "detail/:id",
            element : <Detail />
        }
    ]
)

export default router