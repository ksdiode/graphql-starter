import mongoose from 'mongoose';
// const mongoosePaginate = require('mongoose-paginate-v2');

const todoSchema = mongoose.Schema({
  title: String,
  done: Boolean,
});

// todoSchema.plugin(mongoosePaginate);

const Todo = mongoose.model('Todo ', todoSchema);
export default Todo;
