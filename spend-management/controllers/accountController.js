// controllers/accountController.js
const Account = require('../models/Account');

exports.getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching accounts', error });
  }
};

exports.createAccount = async (req, res) => {
  try {
    const { userId, balance, currency, bankName, accountType } = req.body;
    const newAccount = new Account({
      userId,
      balance,
      currency,
      bankName,
      accountType
    });
    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ message: 'Error creating account', error });
  }
};
