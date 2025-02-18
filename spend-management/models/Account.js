const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  bankName: String,
  accountType: String,
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
