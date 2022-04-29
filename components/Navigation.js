import React from 'react'
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-end">
    {[
      ['Home', '/'],
      ['Posts', '/posts'],
      ['Projects', '/projects'],
      ['About', '/about'],
    ].map(([title, url]) => (
      <a href={url} className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-200 hover:text-slate-900">{title}</a>
    ))}
    </nav>
  )
}
