import { createBrowserRouter, redirect } from "react-router-dom"
import LoginPage from "../views/LoginPage"
import Swal from "sweetalert2";
import BaseLayout from "../views/BaseLayout";
import HomePage from "../views/HomePage";
import CategoryPage from "../views/CategoryPage";
import FormCuisine from "../components/FormCuisine";
import AddCuisinePage from "../views/AddCuisinePage";
import EditCuisinePage from "../views/EditCuisinePage";
import RegisterPage from "../views/RegisterPage";
import FormPatch from "../components/FormPatch";




const router = createBrowserRouter([
    {
        path : "/login",
        element : <LoginPage/>
    },
    {
        element : <BaseLayout />,
        loader : () => {
            if(!localStorage.access_token) {
                Swal.fire({
                    title : "Please Login",
                    icon : "warning"
                });

                return redirect('/login')
            }

            return null
        },
        children : [
            {
                path : "/",
                element : <HomePage />,
            },
            {
                path : "/categories",
                element : <CategoryPage />
            },
            {
                path : "/add-user",
                element : <RegisterPage />
            },
            {
                path : "/addCuisine",
                element : <AddCuisinePage />
            },
            {
                path : "/cuisine/edit/:id",
                element : <EditCuisinePage />
            },
            {
                path : "/cuisine/patch/:id",
                element : <FormPatch />
            }
        ]
    }
])

export default router