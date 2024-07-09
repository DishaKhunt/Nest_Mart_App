import React,{useRef} from 'react'
import Header from './Header'
import Footer from './Footer'
import about1 from '../../assets/images/about-1.png'
import about2 from '../../assets/images/about-2.png'
import about3 from '../../assets/images/about-3.png'
import about4 from '../../assets/images/about-4.png'
import icon1 from '../../assets/images/icon-1.svg'
import icon2 from '../../assets/images/icon-2.svg'
import icon3 from '../../assets/images/icon-3.svg'
import icon4 from '../../assets/images/icon-4.svg'
import icon5 from '../../assets/images/icon-5.svg'
import icon6 from '../../assets/images/icon-6.svg'

export default function About() {

    const containerRef = useRef(null);

    const scrollNext = () => {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };
  
    const scrollPrev = () => {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
  return (
    <div>
        {/* Header */}
        <Header/>

        {/* About us START */}
        <div className="container w-9/12 mx-auto my-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className=''>
                    <img src={about1} alt="" className=' h-[400px] md:h-[650px] w-full object-cover rounded-lg'/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <h1 className='text-3xl font-bold'>Welcome to Nest</h1>
                    <p className='mt-4 text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
                        <br /> <br />

                        Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
                    </p>

                    <div className="relative mt-5 ">
                        <button 
                        onClick={scrollPrev} 
                        className="absolute z-10 p-2 transform -translate-y-1/2 bg-gray-200 rounded-full shadow-md -left-4 top-1/2 hover:bg-green-500"
                        >
                        <svg className="w-6 h-6 text-gray-600 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        </button>
                        <div ref={containerRef} className="flex h-auto gap-4 mt-5 overflow-x-auto snap-x scrollbar-hide">
                        {[{ img: about2 }, 
                        { img: about3 }, 
                        { img: about4}, 
                        { img: about2 }, 
                        { img: about3}, 
                        { img: about4  }, 
                        { img: about2 }, 
                        { img: about3 }, 
                        { img: about4 }]
                            .map((category, index) => (
                            <div key={index} className={`flex-none snap-start`}>
                                <a href="#">
                                <img className=" mx-auto md:h-[200px] h-[350px] w-[350px] md:w-[180px] items-center img-fluid" src={category.img} alt={`${category.title} image`} />
                                </a>
                                
                            </div>
                        ))}
                        </div>
                        <button 
                        onClick={scrollNext} 
                        className="absolute z-10 p-2 transform -translate-y-1/2 bg-gray-200 rounded-full shadow-md -right-3 top-1/2 hover:bg-green-500"
                        >
                        <svg className="w-6 h-6 text-gray-600 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container w-9/12 pt-10 mx-auto my-5">
            <h1 className='font-serif text-3xl font-bold text-center'>What We Provide?</h1>

            <div className="grid grid-cols-1 gap-4 pt-4 mt-5 md:grid-cols-2 lg:grid-cols-3">
                <div className='flex flex-col items-center justify-center p-10 border rounded-xl hover:shadow-md'>
                    <img src={icon1} alt="" className='h-28 img-fluid' />
                    <h1 className='my-5 text-2xl font-bold'>Best Prices & Offers</h1>
                    <p className='text-center'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center p-10 border rounded-xl hover:shadow-md'>
                    <img src={icon2} alt="" className='h-28 img-fluid'/>
                    <h1 className='my-5 text-2xl font-bold'>Wide Assortment</h1>
                    <p className='text-center'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center p-10 border rounded-xl hover:shadow-md'>
                    <img src={icon3} alt="" className='h-28 img-fluid' />
                    <h1 className='my-5 text-2xl font-bold'>Free Delivery</h1>
                    <p className='text-center'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center p-10 border rounded-xl hover:shadow-md'>
                    <img src={icon4} alt="" className='h-28 img-fluid' />
                    <h1 className='my-5 text-2xl font-bold'>Easy Returns</h1>
                    <p className='text-center'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center p-10 border rounded-xl hover:shadow-md'>
                    <img src={icon5} alt="" className='h-28 img-fluid' />
                    <h1 className='my-5 text-2xl font-bold'>100% Satisfaction</h1>
                    <p className='text-center'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center p-10 border rounded-xl hover:shadow-md'>
                    <img src={icon6} alt="" className='h-28 img-fluid' />
                    <h1 className='my-5 text-2xl font-bold'>Great Daily Deal</h1>
                    <p className='text-center'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                    </p>
                </div>
            </div>
        </div>

        
        
        {/* About us END */}

        {/* Footer */}
        <Footer/>
    </div>
  )
}
