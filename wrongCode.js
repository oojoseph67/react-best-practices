React.useEffect(() => {
  if (refElement.current) {
    setHeight(refElement.current.offsetHeight);
  }
}, [refElement.current]);
