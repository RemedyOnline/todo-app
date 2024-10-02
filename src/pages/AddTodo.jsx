import { useNavigate } from "react-router-dom";

const AddTodo = () => {
    const navigate = useNavigate();

    const saveTodo = (event) => {
        event.preventDefault();

        // Post data to todo api...
        // Goto the homepage...

        navigate('/');

    }
    return(
        <>
            <h1>New todo's here...</h1>
            <form onSubmit={saveTodo}>
                <input type="text" name="task" id="task" placeholder="Enter any activity..." />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default AddTodo;