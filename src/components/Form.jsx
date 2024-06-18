import { useState } from "react";
import List from "./List";

const Form = () => {

    //prevent the form from reloading the page on submit
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    const createPost = () => {
        if(title !== ''){
            setPosts((t) => [title, ...t]);
            setTitle('');
        }
    }

    // title state with setTitle
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    return(<>
        <form className="formStyle" onSubmit={handleSubmit}>
            {/* title input field */}
            <div className="titleWrapper">
                <label htmlFor="title" id="titleLabel">Title</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <button type="submit" className="createBtn" onClick={createPost}>Create</button>
        </form>


        <List posts={posts} setPosts={setPosts}/>
        
    </>)
}

export default Form;