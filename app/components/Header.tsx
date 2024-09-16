import Link from 'next/link'
import { ShoppingCart, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SearchInput from './SearchInput' 

export default function Header() {
  return (
    <header className="bg-green-700 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">AgriEcommerce</Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/products" className="hover:text-green-200">Products</Link>
          <Link href="/categories" className="hover:text-green-200">Categories</Link>
          <Link href="/about" className="hover:text-green-200">About</Link>
          <Link href="/contact" className="hover:text-green-200">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
            <SearchInput/>
          <Link href="/cart">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}