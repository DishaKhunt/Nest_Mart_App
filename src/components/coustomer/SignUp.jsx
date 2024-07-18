import React from 'react'
import logo from '../../assets/images/logo.svg';

export default function SignUp() {
  return (
    <div>
        <div className="mt-0 container-fluid bg-green-50">
      <div className="container w-full py-10 mx-auto lg:w-8/12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className='items-center justify-center hidden md:flex'>
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/423/057/non_2x/people-characters-trolley-buying-grocery-food-products-in-mobile-app-vector.jpg"
            className="h-[400px] md:h-[530px] w-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <section className="w-full ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto align-items-center md:h-screen lg:py-0">
              <a href="#" className="flex items-center mb-6 text-2xl font-semibold">
                <img className="w-full mr-2 h-14" src={logo} alt="Logo" />
              </a>
              <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                    Sign up to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium"
                      >
                        User Name
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 hover:outline-none"
                        placeholder="Enter User Name"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 hover:outline-none"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-green-600 focus:border-green-600 hover:outline-none block w-full p-2.5"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium"
                      >
                       Confirm Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="cpassword"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-green-600 focus:border-green-600 hover:outline-none block w-full p-2.5"
                        required=""
                      />
                    </div>
                  
                    <button
                      type="submit"
                      className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Sign up
                    </button>
                    <p className="text-sm font-light text-gray-500">
                      Don’t have an account yet?{' '}
                      <a
                        href="/login"
                        className="font-medium text-primary-600 hover:underline"
                      >
                        Sign in
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
  </div>
    </div>
    </div>
  )
}
