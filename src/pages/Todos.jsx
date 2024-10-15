// NB: pages will have large components that will most likely cover the entire page...

// 
import { useEffect, useState } from "react";
import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";
import axios from "axios";

const Todos = () => {
    // 1.  Declaring a state to store todos...
    const [todos, setTodos] = useState([]);
    // where todos = the variable...
    // setTodos = what we will use to change the variables...

    // 2. Defining a function to get todos...
    const getTodos = async () => {
        // use axioms to get todos
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos?limit=0`);
        console.table(response.data)
        // update todo state
        setTodos(response.data);
    }

    // 3. Call function with useEffect...
    useEffect(() => {
        getTodos();
    }, []);
//3724
    return (
        <div>
            <h1>All todo's go here...</h1>
            <div>
                {todos.map((todo) => {
                    return <TodoTile title={todo.title} key={todo._id} icon={todo.icon} />
                })}
                {/* <TodoTile title={'Try 2'} />
                <TodoTile title={'Try 3'} />
                <TodoTile title={'Try 4'} />
                <TodoTile title={'Try 5'} /> */}
            </div>
            <Link to={'/add'}>Add Todo</Link>
        </div>
    )
}

export default Todos