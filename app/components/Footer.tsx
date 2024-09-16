import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">AgriEcommerce is your one-stop shop for all agricultural products and supplies.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-green-200">Products</Link></li>
              <li><Link href="/categories" className="hover:text-green-200">Categories</Link></li>
              <li><Link href="/about" className="hover:text-green-200">About</Link></li>
              <li><Link href="/contact" className="hover:text-green-200">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-green-200">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-green-200">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-green-200">Returns</Link></li>
              <li><Link href="/privacy" className="hover:text-green-200">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-2">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="px-3 py-2 text-gray-700 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-500 focus:outline-none">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 AgriEcommerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}