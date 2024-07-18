import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { Fragment } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import category1 from '../../assets/images/category-1.svg';
import category2 from '../../assets/images/category-2.svg';
import category3 from '../../assets/images/category-3.svg';
import category4 from '../../assets/images/category-4.svg';
import category5 from '../../assets/images/category-5.svg';
import category6 from '../../assets/images/category-6.svg';
import category7 from '../../assets/images/category-7.svg';
import category8 from '../../assets/images/category-8.svg';
import category9 from '../../assets/images/category-9.svg';
import category10 from '../../assets/images/category-10.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-green-50">
        <div className="flex items-center justify-between px-2 py-5 mx-auto md:px-10 max-w-screen-2xl">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-11 sm:h-11" alt="Logo" />
          </a>

          <form action="" className="hidden md:block">
          <div class="relative hidden md:block">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="search" className="p-2 border border-green-500 rounded ps-10 w-96 focus:outline-0" placeholder="Search Here" />
    </div>
           
          </form>

            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <a href="#" className="relative flex items-center gap-1 text-black hover:text-green-500">
                    <i className="relative text-2xl bi bi-heart">
                        <div class="absolute  block w-4 h-4 bg-green-500 border-2 border-white rounded-full -top-0.5 start-3"></div>

                        <div class="absolute animate-ping block w-4 h-4 bg-green-500 border-2 border-white rounded-full -top-0.5 start-2.5 "></div>

                    </i>
                 
                    <span className="hidden pt-2 text-sm sm:block">Wishlist</span>
                </a>
                <a href="#" className="flex gap-1 text-black hover:text-green-500">
                    <i className="relative text-2xl bi bi-cart3">
                        <div class="absolute  block w-4 h-4 bg-green-500 border-2 border-white rounded-full -top-0.5 start-3"></div>

                        <div class="absolute animate-ping block w-4 h-4 bg-green-500 border-2 border-white rounded-full -top-0.5 start-2.5 "></div>
                    </i>
                    <span className='hidden pt-2 text-sm sm:block'>Cart</span>
                </a>
                <a href="/login" className="flex gap-1 text-black hover:text-green-500">
                    <i className="text-2xl bi bi-person"></i>
                    <span className='hidden pt-2 text-sm sm:block'>Account</span>
                </a>

                <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
                    <i className="text-3xl bi bi-list"></i>
                </button>
            </div>


        
        </div>
      </nav>

      <nav className={`shadow ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="px-10 py-3 mx-auto max-w-screen-2xl">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-green-500 px-3 py-3 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-white-300 hover:bg-green-400">
                  <i className="bi bi-grid"></i>
                  Browse All Category
                  <ChevronDownIcon className="w-5 h-5 -mr-1 text-white" aria-hidden="true" />
                </MenuButton>
              </div>

              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute left-0 z-10 mt-2 w-[250px] md:w-[400px] text-sm origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-green-300 border">
                  <div className="flex flex-col p-5 mx-auto md:gap-4 md:flex-row">
                    <ul className="">
                      <li className="flex items-center gap-3 p-2 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500">
                        <img src={category1} alt="cate-1" className="h-8" />
                        <span>Milk and Dairies</span>
                      </li>
                      <li className="flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500">
                        <img src={category2} alt="cate-1" className="h-8" />
                        <span>Clothing & beauty</span>
                      </li>
                      <li className="flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500">
                        <img src={category3} alt="cate-1" className="h-8" />
                        <span>Pet Foods & Toy</span>
                      </li>
                      <li className="flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500">
                        <img src={category4} alt="cate-1" className="h-8" />
                        <span>Baking material</span>
                      </li>
                      <li className="flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500">
                        <img src={category5} alt="cate-1" className="h-8" />
                        <span>Fresh Fruit</span>
                      </li>
                    </ul>

                    <ul className="">
                      <li className="flex items-center gap-3 p-2 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500">
                        <img src={category6} alt="cate-1" className="h-8" />
                        <span>Wines & Drinks</span>
                      </li>
                      <li className="flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500">
                        <img src={category7} alt="cate-1" className="h-8" />
                        <span>Fresh Seafood</span>
                      </li>
                      <li className="flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500">
                        <img src={category8} alt="cate-1" className="h-8" />
                        <span>Fast food</span>
                      </li>
                      <li className="flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500">
                        <img src={category9} alt="cate-1" className="h-8" />
                        <span>Vegetables</span>
                      </li>
                      <li className="flex items-center gap-3 p-2 mt-3 font-medium border rounded hover:shadow-lg hover:text-green-500 hover:border-green-500">
                        <img src={category10} alt="cate-1" className="h-8" />
                        <span>Bread and Juice</span>
                      </li>
                    </ul>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>

            <ul className="flex flex-col mt-4 space-x-0 space-y-4 text-base font-medium md:flex-row md:mt-0 md:space-y-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <a href="#" className="text-gray-900 hover:text-green-500"><i className="text-green-500 bi bi-fire"></i> Deals</a>
              </li>
              <li>
                <a href="/" className="text-green-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/about-us" className="text-gray-900 hover:text-green-500">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-green-500">Shop</a>
              </li>
              <li>
                <a href="/vendors" className="text-gray-900 hover:text-green-500">Vendors</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-green-500">Blogs</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-green-500">Contact</a>
              </li>
            </ul>

            <div className="flex flex-col mt-4 md:mt-0">
              <a href="#" className="text-xl font-bold text-green-500">
                <i className="text-black bi bi-headphones text-normal"></i> 1900-8888
              </a>
              <span className='text-sm'>24/7 Support Center</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
