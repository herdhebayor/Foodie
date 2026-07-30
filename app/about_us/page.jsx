'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaStar, FaLeaf, FaCheckCircle } from 'react-icons/fa'
import { MdDeliveryDining, MdRestaurant, MdPeople, MdEmojiEvents } from 'react-icons/md'
import { BsFire, BsCupHot, BsStopwatch } from 'react-icons/bs'
import { GiChopsticks, GiFruitBowl } from 'react-icons/gi'

function AboutUs() {

  const milestones = [
    { id: 1, value: '5+', label: 'Years of Service', icon: MdEmojiEvents },
    { id: 2, value: '50K+', label: 'Happy Customers', icon: MdPeople },
    { id: 3, value: '200K+', label: 'Meals Delivered', icon: MdDeliveryDining },
    { id: 4, value: '4.9', label: 'Average Rating', icon: FaStar },
  ]

  const values = [
    {
      id: 1,
      icon: GiChopsticks,
      title: 'Premium Quality',
      description: 'We source the freshest ingredients and prepare every meal with care, ensuring each bite meets our high standards.',
    },
    {
      id: 2,
      icon: BsStopwatch,
      title: 'Lightning Fast',
      description: 'Our optimized kitchen workflow and dedicated delivery fleet ensure your food arrives hot and on time, every time.',
    },
    {
      id: 3,
      icon: GiFruitBowl,
      title: 'Fresh Always',
      description: 'Every order is made-to-order. No pre-cooked meals, no shortcuts — just fresh food prepared when you order.',
    },
    {
      id: 4,
      icon: MdPeople,
      title: 'Community First',
      description: 'We partner with local suppliers and growers, supporting our community while delivering the best to your table.',
    },
  ]

  const differentiators = [
    {
      id: 1,
      icon: FaLeaf,
      title: 'Fresh Ingredients',
      description: 'Farm-to-table freshness with locally sourced produce, premium meats, and artisanal ingredients.',
    },
    {
      id: 2,
      icon: MdDeliveryDining,
      title: 'Fast Delivery',
      description: 'Smart routing and real-time tracking mean your order arrives fresh, hot, and faster than ever before.',
    },
    {
      id: 3,
      icon: BsCupHot,
      title: 'Easy Ordering',
      description: 'A seamless mobile and web experience lets you order your favorites in just a few taps — anytime, anywhere.',
    },
    {
      id: 4,
      icon: FaCheckCircle,
      title: 'Affordable Prices',
      description: 'Premium food doesn\'t have to break the bank. We offer competitive pricing without compromising quality.',
    },
  ]

  const team = [
    {
      id: 1,
      name: 'Jane Smith',
      role: 'Head Chef',
      image: '/images/headChef.jpg',
      description: 'With over 15 years of culinary experience, Jane brings creativity and passion to every dish.',
    },
    {
      id: 2,
      name: 'John Doe',
      role: 'Assistant Chef',
      image: '/images/assiChef.jpg',
      description: 'John\'s precision and dedication ensure every plate that leaves the kitchen is a masterpiece.',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Pastry Chef',
      image: '/images/pastryChef.jpg',
      description: 'Mike crafts desserts that are as beautiful as they are delicious — the sweet finale to every meal.',
    },
  ]

  return (
    <div className="min-h-screen w-full pt-20 bg-gray-50 text-slate-900 overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative flex items-center justify-center h-[50vh] min-h-[320px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/image-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-semibold bg-orange-500/20 backdrop-blur-sm text-orange-300 px-4 py-1.5 rounded-full mb-4">
            <BsFire className="text-orange-400" /> Get to Know Us
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Our Story
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From a simple idea to a beloved food destination — Foodie was born out of a passion for 
            bringing people together through delicious, high-quality food delivered right to your door.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY SECTION ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-image.jpg"
                  alt="Foodie Kitchen"
                  width={600}
                  height={450}
                  className="w-full h-72 md:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-orange-600 text-white rounded-xl px-5 py-3 shadow-lg hidden md:block">
                <p className="font-bold text-lg">Est. 2020</p>
                <p className="text-xs text-orange-100">5+ Years of Flavor</p>
              </div>
            </div>
            <div>
              <span className="text-orange-600 font-semibold text-sm tracking-widest uppercase">Our Journey</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">
                Crafting Cravings,{' '}
                <span className="text-orange-600">One Meal at a Time</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Foodie started in 2020 with a simple mission: make great food accessible to everyone. 
                  What began as a small kitchen operation has grown into one of the most trusted food 
                  delivery platforms in the region — serving thousands of happy customers daily.
                </p>
                <p>
                  We believe that food is more than just sustenance — it is an experience, a comfort, 
                  and a way to bring people together. That is why every ingredient is carefully selected, 
                  every recipe perfected, and every order handled with the utmost care.
                </p>
                <p>
                  Our team of passionate chefs works tirelessly to create a menu that offers something 
                  for everyone — from juicy burgers and wood-fired pizzas to fresh salads, hearty wraps, 
                  and indulgent desserts. At Foodie, we don&apos;t just deliver food; we deliver happiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-16 md:py-20 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_55%)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-sm tracking-widest uppercase">Our Purpose</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
                <MdRestaurant className="text-orange-600 text-2xl" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To redefine food delivery by offering restaurant-quality meals that are fresh, 
                flavorful, and delivered fast. We are committed to using premium ingredients, 
                supporting local producers, and creating a seamless experience that brings 
                joy to every meal.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
                <FaStar className="text-orange-600 text-2xl" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most loved food delivery platform — known not just for speed, 
                but for uncompromising quality, exceptional customer service, and a menu that 
                celebrates diverse tastes. We envision a world where great food is always 
                just a few taps away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-600 font-semibold text-sm tracking-widest uppercase">What We Stand For</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Our Core Values
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              These principles guide everything we do — from the kitchen to your doorstep.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.id}
                  className="group bg-gray-50 rounded-2xl p-6 md:p-8 text-center hover:bg-orange-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="w-16 h-16 mx-auto bg-orange-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon className="text-orange-600 group-hover:text-white text-2xl transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500 group-hover:text-orange-100 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== STATS / MILESTONES ===== */}
      <section className="py-16 md:py-20 bg-orange-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Foodie by the Numbers
            </h2>
            <p className="text-orange-100 mt-2 max-w-xl mx-auto">
              Our growth is powered by your trust and appetite.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {milestones.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.id} className="text-center text-white">
                  <div className="w-14 h-14 mx-auto bg-white/15 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-2xl" />
                  </div>
                  <p className="font-display text-4xl md:text-5xl font-bold mb-1">{item.value}</p>
                  <p className="text-sm text-orange-200 font-medium">{item.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== WHAT SETS US APART ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-600 font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              What Sets Us Apart
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              We go the extra mile to make every meal memorable.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {differentiators.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="flex gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 shrink-0 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Icon className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== OUR TEAM ===== */}
      <section className="py-16 md:py-24 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_55%)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-600 font-semibold text-sm tracking-widest uppercase">Meet the Team</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              The People Behind the Food
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Passionate culinary artists dedicated to making every meal extraordinary.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">{member.name}</p>
                    <p className="text-sm text-orange-300 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl p-8 md:p-14 text-white text-center shadow-xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Ready to Savor the Flavor?
              </h2>
              <p className="text-orange-100 max-w-lg mx-auto mb-8 text-sm md:text-base">
                Whether you are craving a juicy burger, a fresh wrap, or a sweet treat — 
                Foodie has you covered. Order now and taste the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-all duration-300 shadow-lg"
                >
                  Explore Menu <FaArrowRightLong />
                </Link>
                <Link
                  href="/cart"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Start Your Order <MdDeliveryDining className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

