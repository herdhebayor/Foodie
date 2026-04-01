import React from 'react'
import Link from 'next/link';
import { MdDeleteOutline, MdOutlineCancel } from "react-icons/md";

function UserOrders({ orders }) {
  return (
    <div className="container mx-auto p-6">
              <h1 className="text-2xl font-bold mb-6">My Orders</h1>
              <div className="space-y-4">
                {orders.map(order => (
                  <Link
                    key={order._id}
                    href={`/orders/${order._id}`}
                    className="block border p-4 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex justify-between">
                        <div className='flex flex-col text-sm text-slate-900'>
                            <span>
                                Order #{order._id.slice(-6)}
                            </span>
                            <span>
                                ₦{order.totalAmount}
                            </span>
                            <span>
                                {order.status}
                            </span>
                            <span>
                                {new Date(order.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                      
                      <div className="text-sm flex flex-col gap-2 justify-center">
                       <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                        <MdOutlineCancel size={16} className="inline-block mr-1" />
                        Cancel
                      </button> 
                      <button className="bg-gray-500 text-white px-2 py-1 rounded-md hover:bg-gray-600">
                        <MdDeleteOutline size={16} className="inline-block mr-1" />
                        Delete
                      </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
  )
}

export default UserOrders
