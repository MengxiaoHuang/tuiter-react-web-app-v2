import TodoItem from "./TodoItem.js";
import todos from "./todos.json";
const TodoList = () => {
    return(
        <ul>
        {
        todos.map((todo, key) => {
            return(<TodoItem key={key} todo={todo}/>);
        })
    }
        </ul>
    );
}
export default TodoList;

