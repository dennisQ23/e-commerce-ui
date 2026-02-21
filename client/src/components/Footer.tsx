import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg'>
      <div className='flex flex-col items-center md:items-start gap-4'>
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="TrendLama"
            width={36}
            height={36}
          />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">TRENDLAMA</p>
        </Link>
        <p className="text-sm text-gray-400">© 2024 TrendLama.</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/all-products">All Products</Link>
        <Link href="/arrivals">New Arrivals</Link>
        <Link href="/sellers">Best Sellers</Link>
        <Link href="/sale">Sale</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/about">About</Link>
        <Link href="/support">Support</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/affiliate">Affiliate Program</Link>
      </div>
    </div>
  )
}

export default Footer