import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to AgriEcommerce</h1>
        <p className="text-xl mb-8">Your one-stop shop for all agricultural products and supplies</p>
        <Button asChild>
          <Link href="/products">Shop Now</Link>
        </Button>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Seeds', 'Fertilizers', 'Tools'].map((category) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore our wide range of {category.toLowerCase()}.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href={`/categories/${category.toLowerCase()}`}>View {category}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Quality Products', description: 'We source only the best agricultural products for our customers.' },
            { title: 'Expert Advice', description: 'Our team of agricultural experts is always ready to help you.' },
            { title: 'Fast Shipping', description: 'We ensure quick and reliable delivery of your orders.' },
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}