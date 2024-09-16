import { NextResponse } from 'next/server';
import { db, Order } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  const userOrders = db.orders.filter(order => order.userId === userId);
  return NextResponse.json(userOrders);
}

export async function POST(request: Request) {
  const order: Omit<Order, 'id' | 'createdAt'> = await request.json();
  const newOrder: Order = {
    ...order,
    id: (db.orders.length + 1).toString(),
    createdAt: new Date(),
  };
  db.orders.push(newOrder);
  return NextResponse.json(newOrder, { status: 201 });
}