const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  address: {
    address1: String,
    address2: String,
    city: String,
    zip_code: {
      type: Number,
      maxlength: 5,
    },
    country: String,
  },
  payment_info: [
    {
      card_number: {
        type: Number,
        maxlength: 16,
      },
      exp_date: {
        month: {
          type: Number,
          maxlength: 2,
        },
        year: {
          type: Number,
          maxlength: 2,
        },
      },
      cvv: {
        type: Number,
        maxlength: 3,
      },
    },
  ],
});

const User = model('User', userSchema);

module.exports = User;
