import React from 'react'
import Sidebar from './components/admin/Sidebar'
import AdminHeader from './components/admin/AdminHeader'
import Dashboard from './components/admin/Dashboard'

export default function AdminLayout() {
  return (
    <div>
        
        <div className="flex">
            <Sidebar/>
            <div className="flex-1">
                <AdminHeader />

                <div className='p-10'>
                  <Dashboard/>
                </div>
            </div>
            </div>
    </div>
  )
}
