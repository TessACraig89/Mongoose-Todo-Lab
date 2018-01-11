//require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TodoSchema = new Schema({
  task: String,
  description: String,
  complete: Boolean
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
