import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodo = () => {
    const navigate = useNavigate();

    const saveTodo = async (event) => {
        event.preventDefault();
        // Collecting form input...
        const formData = new FormData(event.target)
        
        // Post data to todo api...
        await axios.post('https://todo-api-i7c7.onrender.com/todos',{
            title: formData.get('todo')
        })

        // Goto the homepage...
        navigate('/');

    }
    return(
        <>
            <h1>New todo's here...</h1>
            <form onSubmit={saveTodo}>
                <input type="text" name="todo" id="todo" placeholder="Enter any activity..." />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default AddTodo;