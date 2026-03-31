'use client'

import React from 'react'
import '@smastrom/react-rating/style.css';
import { Rating, Star } from '@smastrom/react-rating';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        rating: 5,
        feedback: 'The food was absolutely delicious! I had the burger and it was juicy and flavorful. Highly recommend!',
    },
    {
        id: 2,
        name: 'Jane Smith',
        rating: 4,
        feedback: 'I ordered the wrap and it was fresh and tasty. The delivery was quick too. Will definitely order again!',
    },
    {
        id: 3,
        name: 'Mike Johnson',
        rating: 5,
        feedback: 'The drinks were refreshing and the customer service was excellent. I had a great experience with Foodie!',
    },
    {
        id: 4,
        name: 'Emily Davis',
        rating: 5,
        feedback: 'I tried the combo meal and it was amazing! The portion size was perfect and the flavors were on point. Highly recommend!',
    },
    {
        id: 5,
        name: 'David Wilson',
        rating: 5,
        feedback: 'The food was delicious and the delivery was fast. I had a great experience with Foodie and will definitely order again!',
    }
]

function Testimonial() {

    const myStyles = {
    itemShapes: Star,
    activeFillColor: '#f59e0b', // Tailwind's amber-500
    inactiveFillColor: '#fed7aa', // Tailwind's orange-200
  };
  return (
    <div className='w-full bg-white text-slate-900'>
        <div className='container mx-auto py-10 px-4'>
            <h2 className='text-3xl font-bold text-center mb-6 md:mb-10'>What Our Customers Say</h2>
            <div className='flex overflow-x-auto  items-center md:justify-center gap-6'>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className='text-sm min-w-45 items-center'>
                            <div className='flex flex-col space-y-3 text-slate-900'>
                                <p className='font-bold line-clamp-1'>{testimonial.name}</p>
                                <div className='w-15'><Rating value={testimonial.rating} readOnly itemStyles={myStyles} /></div>
                                <p className='text-sm italic'>{testimonial.feedback}</p>
                            </div>  
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Testimonial
