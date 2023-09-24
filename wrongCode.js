function App() {
  const [height, setHeight] = React.useState(0);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.offsetHeight);
    }
  }, [elementRef, current]);

  return <div ref={elementRef}></div>;
}
