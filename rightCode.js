function App() {
  const [height, setHeight] = React.useState(0);

  const elementRef = React.useCallback(node => {
    if (node !== null) {
      setHeight(node.offsetHeight);
    }
  }, []);

  return <div ref={elementRef}></div>;
}
