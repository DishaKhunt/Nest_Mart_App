import React,{useRef, useState, useEffect} from 'react'
import axios from 'axios';
import banner1 from '../../assets/images/banner-1.png'
import banner2 from '../../assets/images/banner-2.png'
import banner3 from '../../assets/images/banner-3.png'
import icon1 from '../../assets/images/icon-1.svg'
import icon2 from '../../assets/images/icon-2.svg'
import icon3 from '../../assets/images/icon-3.svg'
import icon4 from '../../assets/images/icon-4.svg'
import icon5 from '../../assets/images/icon-5.svg'
import icon6 from '../../assets/images/icon-6.svg'


export default function Content() {

    const[data,setData]= useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/category`).then((response) => {
            setData(response.data);
        });
    }, []);

    const containerRef = useRef(null);

    const scrollNext = () => {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };
  
    const scrollPrev = () => {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const colors = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100'];

  return (
    <div>

      {/* Categories START */}
        <div className="w-full px-5 mx-auto my-10 container-fulid">
                <h1 className="mb-5 text-3xl font-bold">Featured Categories</h1>

                <div className="relative w-full">
                    <button
                        onClick={scrollPrev}
                        className="absolute z-10 p-2 transform -translate-y-1/2 bg-gray-200 rounded-full shadow-md -left-4 top-1/2 hover:bg-green-500"
                    >
                        <svg className="w-6 h-6 text-gray-600 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <div ref={containerRef} className="flex w-full gap-4 py-5 mt-5 overflow-x-auto snap-x align-items-center scrollbar-hide">
                        {data && data.map((category, index) => (
                            <div key={category.id} className={`flex-none w-52 p-4 snap-start border rounded-lg hover:shadow-lg hover:border-green-500 ${colors[index % colors.length]}`}>
                                <a href="#">
                                    <img className="items-center w-32 h-32 mx-auto rounded-full shadow-xl hover:shadow-lg hover:scale-75 img-fluid" src={category.categoryPhoto} alt={`${category.categoryName} image`} />
                                </a>
                                <div className="px-5 pb-5 mt-3 text-center">
                                    <a href="#">
                                        <h5 className="text-base font-semibold tracking-tight hover:text-green-700">{category.categoryName}</h5>
                                        {/* <span>{category.items} items</span> */}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={scrollNext}
                        className="absolute z-10 p-2 transform -translate-y-1/2 bg-gray-200 rounded-full shadow-md -right-4 top-1/2 hover:bg-green-500"
                    >
                        <svg className="w-6 h-6 text-gray-600 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
        </div>
        {/* Categories END */}


        {/* banner START */}
        <div className="relative flex flex-wrap justify-center px-5 my-10">
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3">
                <div className="relative h-full text-white">
                    <img src={banner1} className="object-cover w-full h-full rounded-lg" alt="Everyday Fresh & Clean with Our Products" />
                    <div className="absolute inset-0 flex flex-col items-start justify-center p-5 text-center rounded-lg">
                        <div className="max-w-sm px-5 text-start">
                        <h5 className="mb-4 text-xl font-bold text-black md:text-2xl animate-bounce">Everyday Fresh & Clean with Our Products</h5>
                        <a href="#" className="px-5 py-2 text-white bg-green-500 rounded-lg btn hover:bg-yellow-500 hover:shadow-xl">Show More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3">
                <div className="relative h-full text-white">
                    <img src={banner2} className="object-cover w-full h-full rounded-lg" alt="Everyday Fresh & Clean with Our Products" />
                    <div className="absolute inset-0 flex flex-col items-start justify-center p-5 text-center rounded-lg">
                        <div className="max-w-sm px-5 text-start">
                        <h5 className="mb-4 text-xl font-bold text-black md:text-2xl animate-bounce">Make your Breakfast Healthy and Easy</h5>
                        <a href="#" className="px-5 py-2 text-white bg-green-500 rounded-lg btn hover:bg-yellow-500 hover:shadow-xl">Show More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-2 lg:w-1/3">
                <div className="relative h-full text-white">
                    <img src={banner3} className="object-cover w-full h-full rounded-lg" alt="Everyday Fresh & Clean with Our Products" />
                    <div className="absolute inset-0 flex flex-col items-start justify-center p-5 text-center rounded-lg">
                        <div className="max-w-sm px-5 text-start">
                        <h5 className="mb-4 text-xl font-bold text-black md:text-2xl animate-bounce">The best Organic Products Online</h5>
                        <a href="#" className="px-5 py-2 text-white bg-green-500 rounded-lg btn hover:bg-yellow-500 hover:shadow-xl">Show More</a>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
        {/* banner END */}



        {/* Product START */}

        {/* Product END */}

        {/* Provide START */}
        <div className="p-5 my-10 container-fluid">
            <div className="flex flex-wrap justify-center gap-3 ">
                <div className='flex items-center gap-3 w-[300px] xl:w-[270px] p-5 rounded-lg bg-gray-50'>
                    <img src={icon1} alt="" className='transition h-14 hover:-translate-y-1 hover:scale-110' />
                    <div>
                        <h4 className='text-xl font-semibold from-neutral-950'>Best prices & offers</h4>
                        <p className='text-gray-400'>Orders $50 or more</p>
                    </div>
                </div>

                <div className='flex items-center gap-3 w-[300px] xl:w-[270px] p-5 rounded-lg bg-gray-50'>
                    <img src={icon2} alt="" className='transition h-14 hover:-translate-y-1 hover:scale-110' />
                    <div>
                        <h3 className='text-xl font-semibold'>Free delivery</h3>
                        <p className='text-gray-400'>24/7 amazing services</p>
                    </div>
                </div>

                <div className='flex items-center gap-3 w-[300px] xl:w-[270px] p-5 rounded-lg bg-gray-50'>
                    <img src={icon3} alt="" className='transition h-14 hover:-translate-y-1 hover:scale-110' />
                    <div>
                        <h3 className='text-xl font-semibold'>Great daily deal</h3>
                        <p className='text-gray-400'>When you sign up</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 w-[300px] xl:w-[270px] p-5 rounded-lg bg-gray-50'>
                    <img src={icon4} alt="" className='transition h-14 hover:-translate-y-1 hover:scale-110' />
                    <div>
                        <h3 className='text-xl font-semibold'>Wide assortment</h3>
                        <p className='text-gray-400'>Mega Discounts</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 w-[300px] xl:w-[270px] p-5 rounded-lg bg-gray-50'>
                    <img src={icon5} alt="" className='transition h-14 hover:-translate-y-1 hover:scale-110' />
                    <div>
                        <h3 className='text-xl font-semibold'>Easy returns</h3>
                        <p className='text-gray-400'>Within 30 days</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 w-[300px] xl:w-[270px] p-5 rounded-lg xl:hidden bg-gray-50'>
                    <img src={icon6} alt="" className='transition h-14 hover:-translate-y-1 hover:scale-110' />
                    <div>
                        <h3 className='text-xl font-semibold'>Safe delivery</h3>
                        <p className='text-gray-400'>Within 30 days</p>
                    </div>
                </div>
             </div>   
        </div>
        {/* Provide END */}
    </div>
  )
}
