
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'CORE OVERSIZED BLACK',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1974&auto=format&fit=crop',
    description: 'Camiseta de corte oversized con algodón premium de alto gramaje.'
  },
  {
    id: 'p2',
    name: 'URBAN GRAPHIC TEE',
    price: 48.50,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop',
    description: 'Estampado minimalista frontal con estética urbana futurista.'
  },
  {
    id: 'p3',
    name: 'CYBER GREEN EDITION',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1974&auto=format&fit=crop',
    description: 'Edición especial con detalles en verde neón reactivo.'
  },
  {
    id: 'p4',
    name: 'MINIMAL LOGO WHITE',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop',
    description: 'Diseño limpio, máxima versatilidad. Corte boxy fit.'
  },
  {
    id: 'p5',
    name: 'DISTORTION TEE',
    price: 52.00,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop',
    description: 'Gráfico distorsionado en espalda. Una pieza de declaración.'
  }
];

export const COLORS = {
  black: '#0a0a0a',
  darkGray: '#121212',
  cardGray: '#1a1a1a',
  accent: '#39FF14',
};
