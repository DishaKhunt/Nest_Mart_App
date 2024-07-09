import React,{useRef} from 'react'
import cate1 from '../../assets/images/cat-1.png'
import cate2 from '../../assets/images/cat-2.png'
import cate3 from '../../assets/images/cat-3.png'
import cate4 from '../../assets/images/cat-4.png'
import cate5 from '../../assets/images/cat-5.png'
import cate9 from '../../assets/images/cat-9.png'
import cate11 from '../../assets/images/cat-11.png'
import cate12 from '../../assets/images/cat-12.png'
import cate14 from '../../assets/images/cat-14.png'
import banner1 from '../../assets/images/banner-1.png'
import banner2 from '../../assets/images/banner-2.png'
import banner3 from '../../assets/images/banner-3.png'

export default function Content() {
    const containerRef = useRef(null);

    const scrollNext = () => {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };
  
    const scrollPrev = () => {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
  return (
    <div>

        {/*  Categories START */}
        <div className="container px-5 my-10">
            <h1 className="text-3xl font-bold mb-5">Featured Categories</h1>

            <div className="relative">
                <button 
                onClick={scrollPrev} 
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-green-500 bg-gray-200 rounded-full shadow-md z-10"
                >
                <svg className="w-6 h-6 text-gray-600 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                </button>
                <div ref={containerRef} className="flex gap-4 snap-x mt-5 align-items-center overflow-x-auto scrollbar-hide">
                {[{ img: cate1, title: 'Vegetables', bg: 'bg-green-100' , items: '12' }, 
                { img: cate2, title: 'Strawberry', bg: 'bg-red-100', items: '20' }, 
                { img: cate3, title: 'Snack', bg: 'bg-amber-100', items: '18' }, 
                { img: cate4, title: 'Black plum', bg: 'bg-gray-100', items: '24' }, 
                { img: cate5, title: 'Custard apple', bg: 'bg-green-100', items: '20' }, 
                { img: cate9, title: 'Red apple', bg: 'bg-red-100', items: '50' }, 
                { img: cate11, title: 'Peach', bg: 'bg-orange-100', items: '20' }, 
                { img: cate12, title: 'Organic kiwi', bg: 'bg-green-100', items: '10' }, 
                { img: cate14, title: 'Coffee & Tea', bg: 'bg-amber-100', items: '16' }]
                    .map((category, index) => (
                    <div key={index} className={`flex-none w-45 p-4 snap-start border rounded-lg hover:shadow-lg hover:border-green-500 ${category.bg}`}>
                        <a href="#">
                        <img className="rounded mx-auto items-center img-fluid" src={category.img} alt={`${category.title} image`} />
                        </a>
                        <div className="px-5 pb-5 text-center">
                        <a href="#">
                            <h5 className="text-base font-semibold tracking-tight hover:text-green-400">{category.title}</h5>
                            <span>{category.items} items</span>
                        </a>
                        </div>
                    </div>
                ))}
                </div>
                <button 
                onClick={scrollNext} 
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-green-500 bg-gray-200 rounded-full shadow-md z-10"
                >
                <svg className="w-6 h-6 text-gray-600 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                </button>
            </div>
        </div>
        {/*  Categories END */}


        {/* banner START */}
        <div className="relative flex flex-wrap justify-center px-5 my-10">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="relative h-full text-white">
                    <img src={banner1} className="w-full h-full object-cover rounded-lg" alt="Everyday Fresh & Clean with Our Products" />
                    <div className="absolute inset-0 p-5 flex flex-col justify-center items-start text-center rounded-lg">
                        <div className="max-w-sm text-start px-5">
                        <h5 className="text-xl md:text-2xl font-bold text-black animate-bounce mb-4">Everyday Fresh & Clean with Our Products</h5>
                        <a href="#" className="btn bg-green-500 hover:bg-yellow-500 hover:shadow-xl text-white py-2 px-5 rounded-lg">Show More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="relative h-full text-white">
                    <img src={banner2} className="w-full h-full object-cover rounded-lg" alt="Everyday Fresh & Clean with Our Products" />
                    <div className="absolute inset-0 p-5 flex flex-col justify-center items-start text-center rounded-lg">
                        <div className="max-w-sm text-start px-5">
                        <h5 className="text-xl md:text-2xl font-bold text-black animate-bounce mb-4">Make your Breakfast Healthy and Easy</h5>
                        <a href="#" className="btn bg-green-500 hover:bg-yellow-500 hover:shadow-xl text-white py-2 px-5 rounded-lg">Show More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3 p-2">
                <div className="relative h-full text-white">
                    <img src={banner3} className="w-full h-full object-cover rounded-lg" alt="Everyday Fresh & Clean with Our Products" />
                    <div className="absolute inset-0 p-5 flex flex-col justify-center items-start text-center rounded-lg">
                        <div className="max-w-sm text-start px-5">
                        <h5 className="text-xl md:text-2xl font-bold text-black animate-bounce mb-4">The best Organic Products Online</h5>
                        <a href="#" className="btn bg-green-500 hover:bg-yellow-500 hover:shadow-xl text-white py-2 px-5 rounded-lg">Show More</a>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
        {/* banner END */}
    </div>
  )
}
