import React from 'react'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className='border'>
      <div className='container mx-auto flex space-x-4 py-2'>
        <h1 className='grow font-bold justify-start py-2'>bgi</h1>
        <Navigation />
      </div>
    </header>
  )
}
