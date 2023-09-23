const useArrayState = (initialState = []) => {
  const [state, setState] = useState(initialState);

  const add = (newValue) => {
    setState((currentState) => [...currentState, newValue]);
  };

  const remove = (index) => {
    setState((currentState) => {
      const newState = [...currentState];
      newState.splice(index, 1);
      return newState;
    });
  };

  return [state, { add, remove }];
};
