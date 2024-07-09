import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import About from './components/coustomer/About'
import AdminLayout from './AdminLayout'
import AdminLogin from './components/admin/AdminLogin'
import AddCategory from './components/admin/AddCategory'
import ManageCategory from './components/admin/ManageCategory'
import DeleteCategory from './components/admin/DeleteCategory'
import EditCategory from './components/admin/EditCategory'
import AddSubCategory from './components/admin/AddSubCategory'
import ManageSubCategory from './components/admin/ManageSubCategory'
import EditSubCategory from './components/admin/EditSubCategory'
import DeleteSubCategory from './components/admin/DeleteSubCategory'
import AddProduct from './components/admin/AddProduct'
import ManageProduct from './components/admin/ManageProduct'
import DeleteProduct from './components/admin/DeleteProduct'
import EditProduct from './components/admin/EditProduct'
import AddBlogs from './components/admin/AddBlogs'
import ManageBlogs from './components/admin/ManageBlogs'
import DeleteBlogs from './components/admin/DeleteBlogs'
import EditBlogs from './components/admin/EditBlogs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* nest coustomer panel Route */}
        <Route path='/' element={<Layout/>}/>
        <Route path='/about-us' element={<About/>}/>

        {/* admin oanel Route */}
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/admin-login/dashboard' element={<AdminLayout />} />

        {/* category */}
        <Route path='/admin-login/category/add' element={<AddCategory />} />
        <Route path='/admin-login/category/manage' element={<ManageCategory />} />
        <Route path='/delete-category/:id' element={<DeleteCategory />} />
        <Route path='/edit-category/:id' element={<EditCategory />} />

        {/* sub Category */}
        <Route path='/admin-login/subcategory/add' element={<AddSubCategory />} />
        <Route path='/admin-login/subcategory/manage' element={<ManageSubCategory />} />
        <Route path='/delete-subcategory/:id' element={<DeleteSubCategory />} />
        <Route path='/edit-subcategory/:id' element={<EditSubCategory />} />

        {/* Product */}
        <Route path='/admin-login/product/add' element={<AddProduct />} />
        <Route path='/admin-login/product/manage' element={<ManageProduct />} />
        <Route path='/delete-product/:id' element={<DeleteProduct />} />
        <Route path='/edit-product/:id' element={<EditProduct />} />

        {/* Blogs */}
        <Route path='/admin-login/blogs/add' element={<AddBlogs />} />
        <Route path='/admin-login/blogs/manage' element={<ManageBlogs />} />
        <Route path='/delete-blogs/:id' element={<DeleteBlogs />} />
        <Route path='/edit-blogs/:id' element={<EditBlogs />} />
      </Routes>
   </Router>
  </React.StrictMode>,
)
