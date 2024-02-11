import { useEffect, useState } from "react"


export default function FormCuisine ({productCategory, nameProp, handleSubmit, product}) {

    // let editData = paramData

    // // const [formData, setFormData] = useState({})
    // const [state, setState] = useState({
    //     name: editData ? editData.name : "",
    //     price: 0
        
    // })

    // let newState = {...state, email:'test'}

    // editData ? setFormData(editData) : ''
    // const editData = { name: "1111" }
    const [form, setForm] = useState({
        name : "",
        price : 0,
        // stock : 0,
        imgUrl : "",
        categoryId : null,
        description : ""

    })

    useEffect(() => {
        if(product) {
            setForm({
                name : product.name,
                price : product.price,
                // stock : product.stock,
                imgUrl : product.imgUrl,
                categoryId : product.categoryId,
                description : product.description
            })
        }
    },[product])

    function handleChange(event) {
        const { name, value } = event.target
        setForm({
            ...form,
            [name] : value
        })
        // console.log(form);
    }

    // console.log(product)

    return (
        <>
            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">{nameProp}</h1>
                <form onSubmit={(e) => handleSubmit(e, form)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="name">Name</label>
                            <input id="name" type="text" name="name" value={form.name ?? ""} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                           
                          </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="price">Price</label>
                            <input id="price" type="number" name="price" value={form.price ?? ""} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>

                        {/* <div>
                            <label className="text-white dark:text-gray-200" htmlFor="stock">Stock</label>
                            <input id="stock" type="number" name="stock" value={form.stock} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div> */}

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="imgUrl">Image (Url)</label>
                            <input id="imgUrl" type="url" name="imgUrl" value={form.imgUrl ?? ""} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="category">Category</label>
                            <select name="categoryId" onChange={handleChange} value={form.categoryId ?? ''} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option value="">Chose</option>
                                {productCategory.map((ele) => {
                                    return <option key={ele.id} value={ele.id ?? ''} >{ele.name ?? ''}</option>
                                })}
                                {/* <option>Surabaya</option>
                                <option>Jakarta</option>
                                <option>Tangerang</option>
                                <option>Bandung</option> */}
                            </select>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="description">description</label>
                            <textarea id="description" type="textarea" name="description" onChange={handleChange} value={form.description ?? ""} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
        </>
    )
}