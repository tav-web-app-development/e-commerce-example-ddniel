import Link from "next/link"


export default function Navbar() {
  return (
    <nav className="flex justify-between w-full">
        <div><Link href='/' className="text-2xl">E-Commerce</Link></div>
        <ul className="flex gap-6">
          <li>About</li>
          <li className="cursor-pointer"><Link href='/products'>Products</Link></li>
          <li>Contact</li>
        </ul>
      </nav>
  )
}
