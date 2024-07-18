import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ManageCategory() {

    const [data, setData] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/category`).then((response) => {
            setData(response.data);
        });
    }, []);
  return (
    <div>
        <div className="flex">
            <Sidebar/>
            <div className="flex-1">
                <AdminHeader />
              <div className='p-10'>
                    <h1 className='mb-5 font-serif text-3xl font-bold text-center'>Mange Category</h1>


                    <div className="flex flex-wrap justify-center gap-5 mx-auto">
                        {data && data.map((item)=> (
                            <div  key={item.id}  className="w-full bg-white border border-green-200 rounded-lg shadow-lg md:w-80 ">
                            <a href="#">
                                <img className="w-full h-64 rounded-t-lg img-fluid" src={item.categoryPhoto} alt="product image" />
                            </a>
                            <div className="px-5 py-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{item.categoryName}</h5>
                                </a>
                                
                                <div className='mt-3'>{item.date}</div>
                                <div className="flex items-center justify-end">
                                    <button type="button" onClick={() => Navigate(`/edit-category/${item.id}`)} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg hover:shadow-md text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>
                                    <button type="button" onClick={() => Navigate(`/delete-category/${item.id}`)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:shadow-md me-2 mb-2">Delete</button>
                                </div>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                    

              </div>
            </div>
        </div>
    </div>
  )
}
