import { NextResponse } from 'next/server';
import { db, Product } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  let filteredProducts = db.products;
  if (category) {
    filteredProducts = db.products.filter(product => product.category === category);
  }

  return NextResponse.json(filteredProducts);
}

export async function POST(request: Request) {
  const product: Product = await request.json();
  product.id = (db.products.length + 1).toString();
  db.products.push(product);
  return NextResponse.json(product, { status: 201 });
}