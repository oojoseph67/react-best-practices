const refElement = React.useCallback((node) => {
  if (node !== null) {
    setHeight(node.getBoundingClientReact().height);
  }
}, []);
