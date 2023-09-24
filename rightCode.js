function App() {
  const [height, setHeight] = React.useState(0);

  const elementRef = React.useCallback(node => {
    if (elementRef.current) {
      setHeight(elementRef.current.offsetHeight);
    }
  }, []);

  return <div ref={elementRef}></div>;
}
