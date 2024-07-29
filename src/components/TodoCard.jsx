export default function TodoCard(props) {
    const {children, handleDeleteTodo, index, handleEditTodo} = props//Uncouples props into 2 variables
    //So children = props allows you to render these components into html?
    //You take in props as an argument and display it in the return code 
    return (
        <li className='todoItem'>
            {children}
            <div className="actionsContainer">
                <button onClick={()=>{handleEditTodo(index)}}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={()=>{handleDeleteTodo(index)}}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}