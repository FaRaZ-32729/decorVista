import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import { FaThList } from "react-icons/fa";
import { MdAddPhotoAlternate, MdPhotoLibrary } from "react-icons/md";

const Sidebar = () => {
    const SideBarLinks = [
        { name: "Dashboard", path: "/admin", icon: <FaHome className='h-5 w-5' /> },
        { name: "Add-Product", path: "/admin/add-product", icon: <MdLibraryAdd className='h-5 w-5' /> },
        { name: "All-Products", path: "/admin/all-products", icon: <FaThList className='h-5 w-5' /> },
        { name: "Add-Gallery-Image", path: "/admin/add-gallery", icon: <MdAddPhotoAlternate className='h-5 w-5' /> },
        { name: "List-Gallery-Images", path: "/admin/list-gallery", icon: <MdPhotoLibrary className='h-5 w-5' /> },
    ]

    return (
        <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300 '>
            {SideBarLinks.map((item, index) => (
                <NavLink to={item.path} key={index} end="/admin" className={({ isActive }) => `flex items-center px-4 py-3 gap-3 md:px-8 ${isActive ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600 " : "hover:bg-gray-100/90 border-white text-gray-700"}`}>
                    {item.icon}
                    <p className='md:block hidden text-center'>{item.name}</p>
                </NavLink>
            ))}
        </div>
    )
}

export default Sidebar;
