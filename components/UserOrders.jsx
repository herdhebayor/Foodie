'use client'

import React from 'react'
import Link from 'next/link';
import DelBtn from '@/components/DelBtn'

function UserOrders({ orders }) {
  return (
    <div className="w-full relative bg-white">
      <div className="mb-5 sticky z-3 bg-white p-5 left-0 top-0 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Recent orders</h2>
          <p className="text-sm text-slate-500">Keep an eye on your latest deliveries.</p>
        </div>
        <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600">{orders.length} items</span>
      </div>

      <div className="space-y-3 px-5 pb-5">
        {orders.slice(1,8).map((order) => {
          const orderDate = order.createdAt ? new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently placed'
          const itemCount = Array.isArray(order.items) ? order.items.length : 1

          return (
            <div
              key={order._id}
              
              className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:flex-row md:items-center md:justify-between"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Order id:{order._id?.slice(-6)}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">{order.status}</span>
                </div>
                <p className="text-sm text-slate-500">Placed on {orderDate} • {itemCount} item{itemCount > 1 ? 's' : ''}</p>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">Total</p>
                  <p className="text-lg font-semibold text-slate-900">&#x20A6;{order.totalAmount.toLocaleString("en-US")}</p>
                </div>
                <div className="flex flex-col items-center md:items-end h-full gap-4 xl:flex-row">
                  <Link href={`/orders/${order._id}`} className="rounded-full border border-orange-100 px-6 py-1 text-sm w-fit font-semibold text-orange-600 transition hover:bg-orange-50">
                    View 
                  </Link>
                  <DelBtn order={order} page={false}/>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserOrders
