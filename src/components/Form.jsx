import { useState } from "react";
import List from "./List";

const Form = () => {

    //prevent the form from reloading the page on submit
    const handleSubmit = (e) => {
        e.preventDefault();

        setPosts((t) => [title, ...t]);
        setTitle('');
    }

    // title state with setTitle
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    return(<>
        <form onClick={(e) => handleSubmit(e)}>
            {/* title input field */}
            <div className="flex items-center gap-x-5 p-5 bg-neutral-400">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <button type="submit">Create</button>
        </form>


        <List posts={posts} setPosts={setPosts}/>
        
    </>)
}

export default Form;