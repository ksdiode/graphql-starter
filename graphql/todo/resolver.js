import Todo from '../../models/todo';
const resolver = {
  Query: {
    getTodoList: async () => await Todo.find(),
    getTodo: async (parent, { _id }, ctx, info) => await Todo.findById(_id),
  },
  Mutation: {
    async addTodo(parent, { todo }, ctx, info) {
      const _todo = new Todo(todo);
      return await _todo.save();
    },
    async updateTodo(parent, { todo }, ctx, info) {
      return await Todo.findByIdAndUpdate(todo._id, todo, { new: true });
    },
    async removeTodo(parent, { _id }, ctx, info) {
      return await Todo.findByIdAndDelete(_id);
    },
  },
};

export default resolver;
