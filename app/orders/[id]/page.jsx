import { notFound } from 'next/navigation';
import { cache } from 'react';
import getOrderById from '@/app/actions/getOrderById';

async function fetchOrder(id) {
  return await getOrderById(id);
}

const getCachedOrder = cache(fetchOrder);
export default async function OrderDetails({ params }) {
   const {id} = await params;
  const order = await getCachedOrder(id);

  console.log('order details', order);

  if (!order) {
    return <p>Order not found</p>;
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-2xl flex items-center font-bold">
        Order Details
        <span className={`px-1 text-sm text-gray-500 ml-4 rounded-md ${order.status ==='pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
          {order.status}...
        </span>
      </h1>

      <div className="border p-4 rounded">
        <p><b>Name:</b> {order.receiver}</p>
        <p><b>Phone:</b> {order.phone}</p>
        <p><b>Address:</b> {order.deliveryAddress}</p>
      </div>

      {/* Items */}
      <div className="border p-4 rounded">
        <h2 className="font-semibold mb-3">Items</h2>

        {order.items.map((item, i) => (
          <div key={i} className="flex justify-between items-center border-b py-2">
            <span className="flex items-center">
              <img src={`/images/${item.image}`} alt={item.name} className="w-10 h-10 object-cover rounded mr-3 inline-block"/>
              {item.name} × {item.quantity}
            </span>
            <span>₦{item.purchasePrice}</span>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="border p-4 rounded space-y-1">
        <p>Subtotal: ₦{order.subtotal}</p>
        <p>Tax: ₦{order.tax}</p>
        <p>Delivery Fee: ₦{order.deliveryFee}</p>

        <p className="font-bold text-lg">
          Total: ₦{order.totalAmount}
        </p>
      </div>
    </div>
  );
}
