import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <h1>Quick-Ticket</h1>
      <Link href='/'>Dashobard</Link>
      <Link href='/tickets'>Tickets</Link>
    </div>
  )
}
