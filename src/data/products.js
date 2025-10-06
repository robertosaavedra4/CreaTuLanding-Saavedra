export const products = [
  { id: '1', title: 'Manzanas', category: 'frutas', price: 1200, stock: 20, image: 'https://andreuprados.com/wp-content/uploads/2017/01/apple_0.jpg.webp', description: 'Manzanas rojas frescas por kilo.' },
  { id: '2', title: 'Bananas', category: 'frutas', price: 900, stock: 35, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlrPIEqTWTlxd8qaZzLTpdt8jYNrgJT25oA&s', description: 'Bananas maduras por kilo.' },
  { id: '3', title: 'Lechuga', category: 'verduras', price: 700, stock: 15, image: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3390007_f.jpg', description: 'Lechuga criolla unidad.' },
  { id: '4', title: 'Tomates', category: 'verduras', price: 1100, stock: 25, image: 'https://menorcoste.com.ar/media/catalog/product/cache/733e84b26907731b1236b698d5769bc3/0/0/0050000000807_50000000807_0_2022-01-31_14_25_05.jpg', description: 'Tomates perita por kilo.' },
  { id: '5', title: 'Leche', category: 'lacteos', price: 1500, stock: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5g7dVNhlJ3tjj3enH3t3tEJgOd9cTtEwkA&s', description: 'Leche entera 1L.' },
  { id: '6', title: 'Queso', category: 'lacteos', price: 4200, stock: 10, image: 'https://http2.mlstatic.com/D_NQ_NP_978469-MLA77400876530_072024-O.webp', description: 'Queso cremoso 500g.' },
];

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export async function getProducts() {
  await delay(600);
  return products;
}

export async function getProductById(id) {
  await delay(600);
  return products.find(p => p.id === id);
}

export async function getProductsByCategory(categoryId) {
  await delay(600);
  return products.filter(p => p.category === categoryId);
}
