import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

export default function Vendor() {
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch category data using Axios
        axios.get('http://localhost:8000/category')
            .then(response => setCategories(response.data))
            .catch(error => console.error('Error fetching category data:', error));
    }, []);

    useEffect(() => {
        // Fetch subcategory data using Axios
        axios.get('http://localhost:8000/subCategory')
            .then(response => setSubCategories(response.data))
            .catch(error => console.error('Error fetching subcategory data:', error));
    }, []);

    useEffect(() => {
        // Fetch product data using Axios
        axios.get('http://localhost:8000/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching product data:', error));
    }, []);

    const filteredProducts = products.filter(product => {
        return (category ? product.category === category : true) &&
               (subCategory ? product.subCategoryName === subCategory : true);
    });

    return (
        <div>
            {/* Header */}
            <Header />

            <div className="container-fluid">
                <div className="container w-11/12 p-5 mx-auto">
                    <div className='flex flex-wrap justify-between my-5 border-b-4 border-green-700'>
                        
                        <h1 className='py-4 text-3xl font-bold'>Product</h1>
                        <div className='flex flex-wrap gap-4 py-5'>
                        <label>
                            <select value={category} onChange={e => setCategory(e.target.value)} className=' rounded-lg border border-gray-300 text-gray-900 focus:ring-gray-500 focus:border-gray-500 block flex-1 focus:outline-none text-base p-2.5 '>
                                <option value="">All categories</option>
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.categoryName}>{cat.categoryName}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            <select value={subCategory} onChange={e => setSubCategory(e.target.value)} className='rounded-lg border border-gray-300 text-gray-900 focus:ring-gray-500 focus:border-gray-500 block flex-1 focus:outline-none text-base p-2.5 '>
                                <option value="">All Sub categories</option>
                                {subCategories.map(subCat => (
                                    <option key={subCat.id} value={subCat.subCategoryName}>{subCat.subCategoryName}</option>
                                ))}
                            </select>
                        </label>
                        </div>
                    </div>
                   

                    <div className="flex flex-wrap justify-center gap-5 py-5 mx-auto mb-5 product-list">
                        {filteredProducts.map(product => (
                            <div  key={product.id}  className="w-full bg-white border border-green-200 rounded-lg shadow-lg md:w-80 ">
                            <a href="#">
                                <img className="w-full h-64 rounded-t-lg img-fluid" src={product.productPhoto} alt="product image" />
                            </a>
                            <div className="px-5 py-5">
                                
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{product.productName}</h5>
                                </a>

                                <p className='mt-3'>{product.productDescription}</p>
                               
                                <div className='mt-3 text-green-500'>
                                   $ {product. productPrice}
                                </div>
                                
                                <p className='font-semibold'> {product.shopkeeper}</p>
                              
                                <div className="flex items-center justify-end">
                                    <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg hover:shadow-md text-sm px-5 py-2.5 text-center me-2 mb-2">ADD TO CART</button>
                                    
                                </div>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
