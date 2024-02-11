import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2'


export default function Detail() {
    // /apis/restaurant-app/cuisines/10
    const [detail, setDetail] = useState([])
    const [user, setUser] = useState([])
    const [category, setCategory] = useState([])
    const { id } = useParams() 

    function currencyFormat(num) {
        if(num) {
            return 'Rp ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        } else {
            return num
        }
    }


    async function fetchDetail() {
        try {
            const { data } = await axios.get(`https://phase2-aio.vercel.app/apis/pub/restaurant-app/cuisines/${id}`)
            console.log(data.data);
            setUser(data.data.User)
            setCategory(data.data.Category)
            setDetail(data.data)
        } catch (error) {
            Swal.fire({
                title: error.response.data.error,
                icon: "error"
            });
        }
    }

    useEffect(() => {
        fetchDetail()
    },[])

    return (
        <>

            <div className="hero min-h-screen bg-base-200 rounded-box">

                <div className="hero-content flex-col lg:flex-row">
                    <img src={detail.imgUrl} className="w-96 rounded-lg shadow-2xl gap-6" />
                    <div className="gap-5">
                        <h1 className="text-5xl font-bold">{detail.name}</h1>
                        <h2 className="text-1xl font-bold">category : {category.name}</h2>
                        <h3 className="text-2xl font-bold">description :</h3>
                        <p className="py-6">{detail.description}</p>
                        <h3 className="text-3xl font-bold">Price : {currencyFormat(detail.price)}</h3>
                        <p className="py-6">uploader : {user.username}</p>
                    </div>
                </div>
            </div>
            <div className="bg-base-200 rounded-box">
                <Link to="/" className="btn btn-primary">
                    Back
                </Link>
            </div>
        </>
    )
}