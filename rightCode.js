import { FixedSizeList as List } from 'react-window'

const list = [...]

const Roe = ({ index, style }) => (
    <div style={style}>
        <User user={list[index]} />
    </div>
)

const ExpensiveList = () => (
    <List heigh={150} itemCount={10000} itemSize={35} width={300}>
        {Row}
    </List>
)