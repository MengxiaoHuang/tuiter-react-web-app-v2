import {Link}
    from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput
    from "./ConditionalOutput";
import TodoList from "./Todo/TodoList.js";

function Assignment6() {
    return(
        <div>
            <Link to="/">Lab</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>
            <h1>Assignment 6</h1>
            <ConditionalOutput/>
            <Classes/>
            <Styles/>
            <TodoList/>
        </div>
    )
}
export default Assignment6;