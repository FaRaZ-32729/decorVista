import React, { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { SiVirustotal } from "react-icons/si";
import Title from '../components/Title';
import axios from 'axios';
const API_URL = import.meta.env.VITE_Node_Api_Url;

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${API_URL}/user/`); // Adjust URL if needed
        if (res.data.success) {
          setUsers(res.data.users);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Title
        title="Dashboard"
        subTitle="Stay on top of your store and design collections in real-time. The dashboard gives you complete control to manage products, update categories, track customer favorites, and organize interior design."
        align="left"
      />

      {/* Stats */}
      <div className='flex gap-4 my-8'>
        <div className='bg-primary/3 border border-primary/10 flex p-4 pr-8'>
          <SiVirustotal className='h-10 w-10 max-sm:hidden' />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Users</p>
            <p className='text-neutral-400 flex items-center justify-center text-base'>{users.length}</p>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>All Users</h2>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>User Email</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Role</th>
              {/* <th className='py-3 px-4 text-gray-800 font-medium text-center'>Actions</th> */}
            </tr>
          </thead>
          <tbody className='text-sm'>
            {users.map((user) => (
              <tr key={user._id}>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{user.name}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{user.email}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 capitalize'>{user.role}</td>
                {/* <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                  <div className="flex justify-center gap-3">
                    <button>
                      <Trash2 className='w-5 h-5 text-red-500 hover:text-red-700' />
                    </button>
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
