import React from 'react';
import Title from '../../components/Title';
import { Trash2 } from 'lucide-react';
import { SiVirustotal } from "react-icons/si";

const Dashboard = () => {
  const users = [
    { _id: '1', name: 'John Doe', email: 'john@example.com', isActive: true },
    { _id: '2', name: 'Jane Smith', email: 'jane@example.com', isActive: false },
    { _id: '3', name: 'Michael Lee', email: 'michael@example.com', isActive: true },
  ];

  return (
    <div>
      <Title
        title="Dashboard"
        subTitle="Gain full control of your hotel in real-time. The dashboard allows staff to manage reservations, check-ins, services, and billing with just a few clicks, improving response times and guest satisfaction."
        align="left"
      />

      <div className='flex gap-4 my-8'>
        <div className='bg-primary/3 border border-primary/10 flex p-4 pr-8'>
          {/* <img src="/assets/bookmark.svg" alt="booking-icon" className='h-10 max-sm:hidden' /> */}
          <SiVirustotal className='h-10 w-10  max-sm:hidden'/>
          <div className='flex flex-col sm:ml-4 font-medium '>
            <p className='text-blue-500 text-lg'>Total Users</p>
            <p className='text-neutral-400 flex items-center justify-center text-base '>{users.length}</p>
          </div>
        </div>
      </div>

      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>All Users</h2>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>User Email</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Status</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Actions</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {users.map((user) => (
              <tr key={user._id}>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{user.name}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{user.email}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                  <button
                    className={`px-3 py-1 rounded-full text-xs ${user.isActive
                      ? 'bg-green-200 text-green-600'
                      : 'bg-red-200 text-red-600'
                      }`}
                  >
                    {user.isActive ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                  <div className="flex justify-center gap-3">
                    <button>
                      <Trash2 className='w-5 h-5 text-red-500 hover:text-red-700' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
