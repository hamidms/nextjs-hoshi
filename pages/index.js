import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <Header />
        <div className="container mx-auto ">
            <div className='grid grid-cols-5 gap-4 h-screen'>
                <div className='col-span-1 border'>tes</div>
                <div className='col-span-3 border p-6'>
                    <h1 className='py-2'>Title Page</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet, <Link href="#"><a className='content'>consectetur</a></Link> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <Link href="#"><a className='content'>aliqua</a></Link>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <Link href="#"><a className='content'>voluptate</a></Link> velit esse cillum dolore eu <Link href="#"><a className='content'>fugiat nulla</a></Link> pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className='border'>tes</div>
            </div>
        <Footer />
        </div>
    </div>
    
  )
}
