const list = [...] // 10k items here

const ExpensiveList = () => {
    return list.map(el => <User user={el} />)
}