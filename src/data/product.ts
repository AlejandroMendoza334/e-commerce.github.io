export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Camiseta React',
    price: 20,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60',
    category: 'Ropa'
  },
  {
    id: 2,
    name: 'Taza Programación',
    price: 10,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=60',
    category: 'Accesorios'
  },
  {
    id: 3,
    name: 'Gorra Developer',
    price: 15,
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&auto=format&fit=crop&q=60',
    category: 'Ropa'
  },
  {
    id: 4,
    name: 'Mouse Pad',
    price: 12,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60',
    category: 'Accesorios'
  },
  {
    id: 5,
    name: 'Mochila Programador',
    price: 45,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60',
    category: 'Accesorios'
  },
  {
    id: 6,
    name: 'Hoodie Programador',
    price: 35,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60',
    category: 'Ropa'
  },
]; 