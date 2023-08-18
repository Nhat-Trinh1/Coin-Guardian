//boiler plate code for creating a schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionsSchema = new Schema ({
  text: {type: String, required: true},
  amount: {type: Number, required: true}
})

module.exports = mongoose.model('Transaction', transactionsSchema);