import React from 'react'
const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        image: '/images/testimonial1.jpg',
        feedback: 'The food was absolutely delicious! I had the burger and it was juicy and flavorful. Highly recommend!',
    },
    {
        id: 2,
        name: 'Jane Smith',
        image: '/images/testimonial2.jpg',
        feedback: 'I ordered the wrap and it was fresh and tasty. The delivery was quick too. Will definitely order again!',
    },
    {
        id: 3,
        name: 'Mike Johnson',
        image: '/images/testimonial3.jpg',
        feedback: 'The drinks were refreshing and the customer service was excellent. I had a great experience with Foodie!',
    },
    {
        id: 4,
        name: 'Emily Davis',
        image: '/images/testimonial4.jpg',
        feedback: 'I tried the combo meal and it was amazing! The portion size was perfect and the flavors were on point. Highly recommend!',
    },
    {
        id: 5,
        name: 'David Wilson',
        image: '/images/testimonial5.jpg',
        feedback: 'The food was delicious and the delivery was fast. I had a great experience with Foodie and will definitely order again!',
    }
]

function Testimonial() {
  return (
    <div className='w-full bg-white text-slate-900'>
        <div className='container mx-auto py-10 px-4'>
            <h2 className='text-3xl font-bold text-center mb-6'>What Our Customers Say</h2>
            <div className='flex overflow-x-auto items-center md:justify-center gap-6'>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className='text-sm min-w-35 hover:shadow-2xl  md:w-45 items-center'>
                            <div className='flex flex-col space-y-3 text-slate-900'>
                                <p className='font-bold line-clamp-1'>{testimonial.name}</p>
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
