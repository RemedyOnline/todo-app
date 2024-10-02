// NB: pages will have large components that will most likely cover the entire page...

// 
import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";

const Todos = () => {
    return (
        <div>
            <h1>All todo's go here...</h1>
            <div>
                <TodoTile title={'Try 2'} />
                <TodoTile title={'Try 3'} />
                <TodoTile title={'Try 4'} />
                <TodoTile title={'Try 5'} />
            </div>
            <Link to={'/add'}>Add Todo</Link>
        </div>
    )
}

export default Todos