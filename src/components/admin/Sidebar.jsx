// AdminLayout.js
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { RiDashboardHorizontalFill, RiSecurePaymentFill, RiLogoutCircleLine, RiContactsLine, RiAlignItemLeftLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits, MdOutlineReviews } from "react-icons/md";
import { LiaBlogSolid, LiaFirstOrderAlt } from "react-icons/lia";
import AdminHeader from './AdminHeader';

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const location = useLocation();

    const Menus = [
        { title: "Dashboard", icon: <RiDashboardHorizontalFill />, path: "/dashboard" },
        {
            title: "Category",
            icon: <BiCategoryAlt />,
            submenu: true,
            submenuItems: [
                { title: "Add Category", path: "/admin-login/category/add" },
                { title: "Manage Category", path: "/admin-login/category/manage" }
            ],
            spacing: true
        },
        {
            title: "SubCategory",
            icon: <RiAlignItemLeftLine />,
            submenu: true,
            submenuItems: [
                { title: "Add SubCategory", path: "/admin-login/subcategory/add" },
                { title: "Manage SubCategory", path: "/admin-login/subcategory/manage" }
            ],
        },
        {
            title: "Product",
            icon: <MdOutlineProductionQuantityLimits />,
            submenu: true,
            submenuItems: [
                { title: "Add Product", path: "/admin-login/product/add" },
                { title: "Manage Product", path: "/admin-login/product/manage" }
            ],
        },
        {
            title: "Blogs",
            icon: <LiaBlogSolid />,
            submenu: true,
            submenuItems: [
                { title: "Add Blogs", path: "/admin-login/blogs/add" },
                { title: "Manage Blogs", path: "/admin-login/blogs/manage" }
            ],
        },
        { title: "Order", icon: <LiaFirstOrderAlt />, path: "/admin-login/order" },
        { title: "Contact", icon: <RiContactsLine />, path: "/admin-login/contact" },
        { title: "Reviews", icon: <MdOutlineReviews />, path: "/admin-login/reviews" },
        { title: "Payment", icon: <RiSecurePaymentFill />, path: "/admin-login/payment" },
        { title: "Logout here", icon: <RiLogoutCircleLine />, spacing: true, path: "/admin-login/logout" },
    ];

    useEffect(() => {
        Menus.forEach((menu, index) => {
            if (menu.submenu) {
                menu.submenuItems.forEach((submenuItem) => {
                    if (submenuItem.path === location.pathname) {
                        setOpenSubMenu(index);
                    }
                });
            }
        });
    }, [location.pathname]);

    const handleSubMenuToggle = (index) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };

    return (
        <div className="flex">
            <div className={`relative h-screen-full ${open ? "w-72" : "w-20"} p-5 pt-8 bg-green-200 duration-300`}>
                <BsArrowLeftShort className={`absolute text-3xl text-green-500 bg-white border border-green-500 rounded-full cursor-pointer -right-3 top-9 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                <div className="inline-flex">
                    <img src={logo} alt="" className={`duration-500 ${open && "rotate-[360deg]"} h-11`} />
                </div>
                <div className={`flex items-center py-2 mt-6 bg-green-100 rounded-md ${!open ? "px-2.5" : "px-5"}`}>
                    <BsSearch className={`block float-left text-lg text-green-500 cursor-pointer ${open && "mr-2"}`} />
                    <input type="search" placeholder='Search' className={`w-full text-base text-green-500 bg-transparent focus:outline-none ${!open && "hidden"}`} />
                </div>
                <ul className="pt-2">
                    {Menus.map((menu, index) => (
                        <React.Fragment key={index}>
                            <li
                                className={`flex items-center p-2 mt-2 text-sm font-semibold text-green-600 rounded-md cursor-pointer gap-x-4 hover:bg-green-100 ${menu.spacing ? "mt-7" : "mt-2"}`}
                                onClick={() => menu.submenu && handleSubMenuToggle(index)}
                            >
                                <span className='block float-left text-2xl'>
                                    {menu.icon ? menu.icon : <RiDashboardHorizontalFill />}
                                </span>
                                <Link to={menu.path || "#"} className={`flex-1 text-base ${!open && "hidden"}`}>
                                    {menu.title}
                                </Link>
                                {menu.submenu && open && (
                                    <BsChevronDown className={`${openSubMenu === index && "rotate-180"}`} />
                                )}
                            </li>
                            {menu.submenu && openSubMenu === index && open && (
                                <ul>
                                    {menu.submenuItems.map((submenuItem, subIndex) => (
                                        <li key={subIndex} className='items-center p-2 px-5 mt-2 text-sm font-semibold text-green-600 rounded-md cursor-pointer gap-x-4 hover:bg-green-100'>
                                            <Link to={submenuItem.path}>
                                                {submenuItem.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
           
        </div>
    );
}
