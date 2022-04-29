import React from 'react'
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-end">
      <Link href='/' ><a className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-200 hover:text-slate-900">Home</a></Link>
      <Link href='/post' ><a className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-200 hover:text-slate-900">Post</a></Link>
    </nav>
  )
}
