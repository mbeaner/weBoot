const db = require('../config/connection');
const { User, Product } = require('../models');

db.once('open', async () => {
  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      title: 'Send Help',
      images: ['send-help.png'],
      description: 'Send Help',
      category: 'Shirts',
      quantity: 30,
      price: 25,
      compare_at_price: null,
      vendor: 'weBoot',
      tags: ['Funny', 'Shirts', 'Cotton', 'Top', 'Graphic'],
      reviews: [{ rating: 3, body: 'This is a great shirt!' }],
      upc: Math.floor(Math.random() * 1000000000),
      variants: [
        {
          id: 1,
          size: 'S',
          color: 'Black',
          inventory: 10,
          image: 'send-help.png',
        },
        {
          id: 2,
          size: 'M',
          color: 'Black',
          inventory: 10,
          image: 'send-help.png',
        },
        {
          id: 3,
          size: 'L',
          color: 'Black',
          inventory: 10,
          image: 'send-help.png',
        },
        {
          id: 4,
          size: 'XL',
          color: 'Black',
          inventory: 10,
          image: 'send-help.png',
        },
        {
          id: 5,
          size: 'S',
          color: 'Blue',
          inventory: 10,
          image: 'send-help-blue.png',
        },
        {
          id: 6,
          size: 'M',
          color: 'Blue',
          inventory: 10,
          image: 'send-help-blue.png',
        },
        {
          id: 7,
          size: 'L',
          color: 'Blue',
          inventory: 10,
          image: 'send-help-blue.png',
        },
        {
          id: 8,
          size: 'XL',
          color: 'Blue',
          inventory: 10,
          image: 'send-help-blue.png',
        },
        {
          id: 9,
          size: 'S',
          color: 'Green',
          inventory: 10,
          image: 'send-help-green.png',
        },
        {
          id: 10,
          size: 'M',
          color: 'Green',
          inventory: 10,
          image: 'send-help-green.png',
        },
        {
          id: 11,
          size: 'L',
          color: 'Green',
          inventory: 10,
          image: 'send-help-green.png',
        },
        {
          id: 12,
          size: 'XL',
          color: 'Green',
          inventory: 10,
          image: 'send-help-green.png',
        },
        {
          id: 13,
          size: 'S',
          color: 'Red',
          inventory: 10,
          image: 'send-help-red.png',
        },
        {
          id: 14,
          size: 'M',
          color: 'Red',
          inventory: 10,
          image: 'send-help-red.png',
        },
        {
          id: 15,
          size: 'L',
          color: 'Red',
          inventory: 10,
          image: 'send-help-red.png',
        },
        {
          id: 16,
          size: 'XL',
          color: 'Red',
          inventory: 10,
          image: 'send-help-red.png',
        },
      ],
    },
    {
      title: 'Mim Hat',
      images: ['/assets/images/mim-hat.png'],
      description: 'Imitation is the sincerest form of flattery',
      category: 'Hats',
      price: 100,
      compare_at_price: 120,
      vendor: 'weBoot',
      tags: ['Hats', 'Headwear', 'Straw', 'Summer', 'Beach', 'Garden'],
      reviews: [{ rating: 4, body: 'This is a great hat!' }],
      upc: Math.floor(Math.random() * 1000000000),
      variants: [
        {
          id: 1,
          size: 'OSFM',
          color: 'Red',
          inventory: 100,
          image: '/assets/images/mim-hat.png',
        },
      ],
    },
  ]);
  console.log('products seeded');
  await User.deleteMany();

  process.exit();
});
