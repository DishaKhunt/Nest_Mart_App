import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams,useNavigate } from 'react-router-dom'

export default function DeleteBlogs() {

     // delete category 
     const[data,setData]=useState([]);
     const{id}=useParams();
     const Navigate=useNavigate();
     useEffect(()=>{
       axios.delete(`http://localhost:8000/blogs/${id}`).then(()=>{
         // pass deleted messages
         Swal.fire({
             title: "Good job!",
             text: "Your Blogs deleted successfully!",
             icon: "error"
           });
     
           Navigate('/admin-login/blogs/manage');
       })
     },[]);
  return (
    <div></div>
  )
}
