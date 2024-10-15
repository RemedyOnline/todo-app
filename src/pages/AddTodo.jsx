import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodo = () => {
    const navigate = useNavigate();

    const saveTodo = async (event) => {
        event.preventDefault();
        // Collecting form input...
        const formData = new FormData(event.target)

        // Post data to todo api...
        // await axios.post(`${import.meta.env.VITE_BASE_URL}/todos`, {
        //     title: formData.get('title')
        // })

        await axios.post(`${import.meta.env.VITE_BASE_URL}/todos`,
            formData
        )

        // Goto the homepage...
        navigate('/');

    }
    return (
        <>
            <h1>New todo's here...</h1>
            <form onSubmit={saveTodo}>
                <input type="file" name="icon" id="icon" />
                <input type="text" name="title" id="title" placeholder="Enter any activity..." />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default AddTodo;