// controllers/spendController.js
const Spend = require('../models/Spend');

exports.getAllSpends = async (req, res) => {
  try {
    const spends = await Spend.find();
    res.json(spends);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching spends', error });
  }
};

exports.addSpend = async (req, res) => {
  try {
    const { userId, amount, category, date } = req.body;
    const newSpend = new Spend({
      userId,
      amount,
      category,
      date
    });
    await newSpend.save();
    res.status(201).json(newSpend);
  } catch (error) {
    res.status(500).json({ message: 'Error adding spend', error });
  }
};
