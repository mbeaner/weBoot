const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  compareAtPrice: {
    type: Number,
    min: 0.99,
  },
  vendor: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  reviews: [
    {
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
      body: {
        type: String,
      },
    },
  ],
  upc: {
    type: Number,
  },
  variants: [
    {
      id: {
        type: Number,
      },
      size: {
        type: String,
      },
      color: {
        type: String,
      },
      inventory: {
        type: Number,
      },
      image: {
        type: String,
      },
    },
  ],
  id: {
    type: String,
  },
});

const Product = model('Product', productSchema);

module.exports = Product;
