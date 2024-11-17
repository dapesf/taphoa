import './Todo.css';
export default function Todo(props) {
    return (
        <>
            <div>
                <div className='todo-content'>
                    <span className='todo-name'>
                        <label data-key={props.data.id}>{props.data.name}</label>
                    </span>
                </div>
            </div>
        </>
    )
}