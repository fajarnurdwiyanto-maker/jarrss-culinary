import { Recipe } from './types';

export const MOCK_RECIPES: Recipe[] = [
  {
    id: 'rendang-001',
    title: 'Rendang Daging Sapi',
    description: 'Masakan daging asli Minangkabau yang kaya rempah dan dimasak lama hingga bumbu meresap sempurna.',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070&auto=format&fit=crop',
    category: 'Daging',
    difficulty: 'Sulit',
    prepTime: 30,
    cookTime: 240,
    servings: 6,
    ingredients: [
      { item: 'Daging Sapi', amount: '1', unit: 'kg' },
      { item: 'Santan Kental', amount: '1', unit: 'L' },
      { item: 'Bawang Merah', amount: '10', unit: 'siung' },
      { item: 'Bawang Putih', amount: '6', unit: 'siung' },
      { item: 'Cabai Merah Keriting', amount: '100', unit: 'g' },
    ],
    instructions: [
      'Haluskan bumbu (bawang, cabai, jahe, kunyit).',
      'Tumis bumbu halus hingga harum.',
      'Masukkan daging sapi, aduk rata.',
      'Tuangkan santan, masak dengan api kecil sambil diaduk sesekali.',
      'Masak hingga kuah mengering dan bumbu mengeluarkan minyak (hitam kecokelatan).'
    ],
    tags: ['Padang', 'Tradisional', 'Pedas'],
    rating: 4.9,
    reviewsCount: 1250,
    nutrition: { calories: 350, protein: 25, carbs: 10, fat: 28 },
    authorId: 'admin',
    authorName: 'Chef Nusantara',
    isFeatured: true
  },
  {
    id: 'nasgor-001',
    title: 'Nasi Goreng Spesial',
    description: 'Nasi goreng khas Indonesia dengan bumbu kecap manis, telur, dan kerupuk.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop',
    category: 'Nasi',
    difficulty: 'Mudah',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    ingredients: [
      { item: 'Nasi Putih', amount: '2', unit: 'piring' },
      { item: 'Kecap Manis', amount: '3', unit: 'sdm' },
      { item: 'Telur', amount: '2', unit: 'butir' },
      { item: 'Bawang Merah', amount: '4', unit: 'siung' },
    ],
    instructions: [
      'Tumis bawang merah dan putih hingga harum.',
      'Masukkan telur, buat orak-arik.',
      'Masukkan nasi putih, aduk rata.',
      'Tambahkan kecap manis, garam, dan lada.',
      'Masak hingga matang dan sajikan dengan kerupuk.'
    ],
    tags: ['Sarapan', 'Cepat', 'Populer'],
    rating: 4.7,
    reviewsCount: 850,
    nutrition: { calories: 450, protein: 12, carbs: 65, fat: 15 },
    authorId: 'admin',
    authorName: 'Chef Nusantara'
  },
  {
    id: 'sate-001',
    title: 'Sate Ayam Madura',
    description: 'Potongan ayam panggang dengan bumbu kacang yang gurih dan manis.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop',
    category: 'Unggas',
    difficulty: 'Sedang',
    prepTime: 30,
    cookTime: 20,
    servings: 4,
    ingredients: [
      { item: 'Daging Ayam Fillet', amount: '500', unit: 'g' },
      { item: 'Kacang Tanah', amount: '250', unit: 'g' },
      { item: 'Kecap Manis', amount: '5', unit: 'sdm' },
      { item: 'Lontong', amount: '4', unit: 'buah' },
    ],
    instructions: [
      'Potong ayam dadu, tusuk dengan tusukan sate.',
      'Haluskan kacang tanah goreng untuk bumbu.',
      'Bakar sate hingga matang sambil diolesi bumbu.',
      'Sajikan dengan bumbu kacang dan kecap manis.'
    ],
    tags: ['Madura', 'Panggang', 'Bumbu Kacang'],
    rating: 4.8,
    reviewsCount: 620,
    nutrition: { calories: 320, protein: 22, carbs: 15, fat: 18 },
    authorId: 'admin',
    authorName: 'Chef Nusantara'
  }
];
