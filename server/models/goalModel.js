//boiler plate code for creating a schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema ({
  goal: {type: Number, required: true}
})

module.exports = mongoose.model('Goal', goalSchema);