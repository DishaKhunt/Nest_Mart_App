import React,{useState, useRef, useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader'
import { MdLibraryAdd , MdOutlineAddPhotoAlternate,  } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom'

export default function EditCategory() {

    const [data,setData] = useState();
    

    const categoryName = useRef("");
    const categoryPhoto = useRef("");
    const date = useRef("");
    const {id}=useParams();
    const Navigate = useNavigate("");
  
  
    // edit task data
  useEffect(()=>{
    axios.get(`http://localhost:8000/category/${id}`).then((response)=>{
    
    categoryName.current.value=response.data.categoryName; 
    categoryPhoto.current.value= response.data.categoryPhoto;
    date.current.value=response.data.date;   
    })
    
    },[]);
  
    const AddCategoryHandeler= (e)=>{
        e.preventDefault();
        var update = {
            categoryName:categoryName.current.value,
            categoryPhoto:categoryPhoto.current.value,
            date:date.current.value
        }
  
        axios.put(`http://localhost:8000/category/${id}`,update)
        .then(()=>{
            Swal.fire({
                title: "Good job",
                text: "Thanks your Category update  successfully",
                icon: "success"
              });
  
              Navigate('/admin-login/category/manage');
        });
  
        e.target.reset();
    }
  return (
    <div>
         <div className="flex">
            <Sidebar/>
            <div className="flex-1">
                <AdminHeader />
                <div>
                    <h1 className='p-10 font-serif text-3xl font-bold text-center'>Add Category</h1>

                    
                    <form className="max-w-2xl mx-auto" onSubmit={AddCategoryHandeler}>
                        <div className='mt-3'>
                            <label className="block mb-2 text-base font-medium text-gray-900 ">Category Name :</label>
                            <div className="flex focus:border-green-600 border-5">
                                <span className="inline-flex items-center px-3 text-xl text-gray-900 border bg-green-50 rounded-s-lg focus:border-green-500">
                                    <MdLibraryAdd />
                                </span>
                                <input type="text" ref={categoryName} className="rounded-none rounded-e-lg bg-green-50 border border-gray-300 text-gray-900 focus:ring-green-500 focus:border-green-500 block flex-1 min-w-0 w-full focus:outline-none text-base p-2.5  " placeholder="Enter the category name"/>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <label className="block mb-2 text-base font-medium text-gray-900 ">Category Photo :</label>
                            <div className="flex focus:border-green-600 border-5">
                                <span className="inline-flex items-center px-3 text-xl text-gray-900 border bg-green-50 rounded-s-lg focus:border-green-500">
                                <MdOutlineAddPhotoAlternate />
                                </span>
                                <input type="text" ref={categoryPhoto} className="rounded-none rounded-e-lg bg-green-50 border border-gray-300 text-gray-900 focus:ring-green-500 focus:border-green-500 block flex-1 min-w-0 w-full focus:outline-none text-base p-2.5  " placeholder="Enter the category Photo"/>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <label className="block mb-2 text-base font-medium text-gray-900 ">Category Add Date:</label>
                            <div className="flex focus:border-green-600 border-5">
                                <span className="inline-flex items-center px-3 text-xl text-gray-900 border bg-green-50 rounded-s-lg focus:border-green-500">
                                <BsCalendarDate  />
                                </span>
                                <input type="date" ref={date} className="rounded-none rounded-e-lg bg-green-50 border border-gray-300 text-gray-900 focus:ring-green-500 focus:border-green-500 block flex-1 min-w-0 w-full focus:outline-none text-base p-2.5  " placeholder="Enter the date"/>
                            </div>
                        </div>

                        <button type="submit" className="text-white bg-gradient-to-r mt-5 from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-bold rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2"><i className="text-xl bi bi-cloud-plus me-3"></i> UPDATE CATEGORY</button>
                        
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}
