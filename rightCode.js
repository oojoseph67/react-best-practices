const TodoList = () => {
  const [todos, { add, remove }] = useArrayState([]);

  const addTodo = () => {
    add({ name: "Some new todo" });
  };

  const removeTodo = (index) => {
    remove(index);
  };

  return <ul>{/** some todos */}</ul>;
};
