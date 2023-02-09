const todos = [
  {
    id: '1',
    title: '첫 번째 할일',
    done: false,
  },
  {
    id: '2',
    title: '두 번째 할일',
    done: false,
  },
  {
    id: '3',
    title: '3 번째 할일',
    done: false,
  },
];

const resolvers = {
  Query: {
    getTodoList: () => todos,
    getTodo: (parent, args, ctx, info) =>
      todos.find((todo) => args.id === todo.id),
  },
  Mutation: {
    addTodo(parent, { todo }, ctx, info) {
      const _todo = {
        id: 4,
        ...todo,
      };
      todos.push(_todo);
      return _todo;
    },
    removeTodo(parent, { id }, ctx, info) {
      // const todo = todos.find((todo) => args.id === todo.id)
      const ix = todos.indexOf((todo) => id === todo.id);
      return todos.splice(ix, 1)[0];
    },
  },
};

export default resolvers;
