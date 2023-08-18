const Transaction = require('../models/transactionsModel')
const transactionsController = {};

// returns an array full of transactions
transactionsController.getTransactions = async (req, res, next) => {
  // Transaction refers to a model, which maps to a collection in the MongoDB database.
  // "document" refers to instances of modeled data, analogous to rows in SQL databases.
  try {
    const transactions = await Transaction.find()
    return res.status(200).json(transactions)
  } catch (err) {
    next({
      log: 'Error in getTransactions',
      message: { err: 'An error occurred'}
    });
  }
}

// adds a transaction to database
transactionsController.addTransactions = async (req, res, next) => {
  // deconstruct the body request
  // create a new entry in the database
  try {
  const { text, amount } = req.body;
  const transactions = await Transaction.create({text: text, amount: amount});
  return res.status(200).json(transactions)
    
  } catch (err) {
    next({
      log: 'Error in addTransactions',
      message: { err: 'An error occurred'}
    });
  }
}

// deletes an entry in the database based on _id
transactionsController.deleteTransactions = async (req, res, next) => {
  // find by id
  // if it doesn't exist send an error
  // if it does remove it
  try {
    const { id } = req.params;
    const transactions = await Transaction.findById(id);
    if (!transactions) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    await Transaction.deleteOne({ _id: id });

    return res.status(200).json({ message: 'Transaction removed successfully' });

  } catch (err) {
    next({
      log: `Error in deleteTransactions: ${err.message}`,
      message: { err: `An error occurred while deleting the transaction: ${err.message}` }
    });
  }
}

transactionsController.resetTransactions = async (req, res, next) => {
  try {
    await Transaction.deleteMany({});
    res.status(200).json([]);
  } catch (err) {
    next({
      log: 'Error in resetTransactions',
      message: { err: 'An error occurred'}
    });
  }
}

module.exports = transactionsController;