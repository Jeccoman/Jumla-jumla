export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
  }
  
  export interface Category {
    id: string;
    name: string;
  }
  
  export interface Order {
    id: string;
    userId: string;
    products: { productId: string; quantity: number }[];
    totalAmount: number;
    status: 'pending' | 'completed' | 'cancelled';
    createdAt: Date;
  }
  
  let products: Product[] = [
    {
      id: '1',
      name: 'Organic Fertilizer Set',
      description: 'A set of high-quality organic fertilizers for various crops',
      price: 149,
      category: 'Fertilizers',
      imageUrl: '/placeholder.svg',
    },
    {
      id: '2',
      name: 'Smart Irrigation System',
      description: 'IoT-based irrigation system for efficient water management',
      price: 249,
      category: 'Smart Farming',
      imageUrl: '/placeholder.svg',
    },
    // Add more products as needed
  ];
  
  let categories: Category[] = [
    { id: '1', name: 'Fertilizers' },
    { id: '2', name: 'Smart Farming' },
    { id: '3', name: 'Seeds' },
    { id: '4', name: 'Pesticides' },
    { id: '5', name: 'Machinery' },
  ];
  
  let orders: Order[] = [];
  
  export const db = {
    products,
    categories,
    orders,
  };