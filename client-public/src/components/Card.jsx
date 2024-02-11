import { Link, Outlet, useNavigate } from "react-router-dom";



export default function Card({ product }) {
  const navigate = useNavigate()
  
  function currencyFormat(num) {
    return 'Rp ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  function handleDetail(id) {
    navigate(`/detail/${id}`)
  }
    return (
        <>
        <div className="card glass">
          <figure><img className="w-96" src={product.imgUrl} alt=""/></figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <h3 className="card-title"> {currencyFormat(product.price)} </h3>
                <div className="card-actions justify-end">
                  {/* <Link to="/detail" className="btn btn-primary"> */}
                    <button className="btn btn-primary" onClick={() => handleDetail(product.id)}>Details</button>
                    {/* Details */}
                  {/* </Link> */}
                </div>
            </div>
          </div>
          <Outlet />
        </>
    )
}