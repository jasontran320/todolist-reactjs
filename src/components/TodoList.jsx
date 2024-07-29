import TodoCard from "./TodoCard"

export default function TodoList(props) {
    const {todos} = props //props is like a tuple and you can uncouple it
    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {//Passing ...props to the TodoCard component
            //Idk why you need both key and index, but apparently you need both
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p> 
                    </TodoCard>
                )
            })}
    </ul>
    )
}