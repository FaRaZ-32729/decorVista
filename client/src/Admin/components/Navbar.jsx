import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contextApi/AuthContext'

const Navbar = () => {
    const { logout } = useContext(AuthContext);
    return (
        <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-3004 '>
            <Link to='/' className='flex gap-1 items-baseline'>
                <h2 className='text-xl font-bold'>DecorVista</h2>
            </Link>

            <button onClick={logout} className="bg-blue-500 flex items-center cursor-pointer  gap-2 text-white px-4 py-1 rounded-md ">
                logout
            </button>
        </div>
    )
}

export default Navbar
