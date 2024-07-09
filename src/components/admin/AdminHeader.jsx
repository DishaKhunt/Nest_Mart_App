import React from 'react'
import { MdNotifications } from "react-icons/md";
export default function AdminHeader() {
  return (
    <div>
        <div className="p-0 m-0 shadow ">
            <div className='flex justify-end w-full p-5 m-0'>
                <span className='text-2xl text-gray-600'>
                    <MdNotifications className=''/>
                </span>

            </div>
        </div>
    </div>
  )
}
