import { db } from './db.js';
import { nanoid } from 'nanoid';

const sample = [
  { title: 'Wireless Headphones', description: 'Noise-cancelling over-ear', price: 149.99, category: 'Electronics', imageUrl: 'https://picsum.photos/seed/headphones/400/300' },
  { title: 'Smart Watch', description: 'Fitness tracking and notifications', price: 199.0, category: 'Electronics', imageUrl: 'https://picsum.photos/seed/watch/400/300' },
  { title: 'Espresso Machine', description: 'Barista-quality at home', price: 249.99, category: 'Home', imageUrl: 'https://picsum.photos/seed/coffee/400/300' },
  { title: 'Running Shoes', description: 'Lightweight and comfortable', price: 89.95, category: 'Fashion', imageUrl: 'https://picsum.photos/seed/shoes/400/300' },
  { title: 'Yoga Mat', description: 'Non-slip, eco-friendly', price: 29.99, category: 'Sports', imageUrl: 'https://picsum.photos/seed/yoga/400/300' }
];

if (db.data.items.length === 0) {
  for (const s of sample) db.data.items.push({ id: nanoid(), ...s, createdAt: new Date().toISOString() });
  db.write();
  console.log('Seeded items:', db.data.items.length);
} else {
  console.log('Items already seeded:', db.data.items.length);
}