export interface CartItem {
  id: string;
  name: string;
  cat: 'Cookie' | 'Cupcake' | 'Topping' | 'Donut';
  price: number;
  qty: number;
}