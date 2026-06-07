export interface Topping {
  id: string;
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Cookie' | 'Cupcake';
  price: number;
  description: string;
  image: string;
  tag?: 'premium';
}