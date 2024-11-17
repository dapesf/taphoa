import './List.css';
import Todo from '../todo/Todo.js';
export default function List(props) {
    return (
        <>
            {
                props.list.map((data) => {
                    return (
                        <Todo key={data.id} data={data} />
                    )
                })
            }
        </>
    )
}