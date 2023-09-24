function App() {
  const onClick = React.useCallback(() => {
    // handle click event
  }, []);

  return <MyExpensiveComponent onClick={onClick} />;
}

const MyExpensiveComponent = React.memo({ onClick }) {
  /** */
}
