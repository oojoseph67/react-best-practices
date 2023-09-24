function App() {
    const onClick = React.useCallback(() => {
        // handle click event
    }, [])
    
    return <Button onClick={onClick} />
}

function Button({ onClick }) {
    return <button onClick={onClick}>Click me!</button>
}