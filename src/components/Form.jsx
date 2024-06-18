import { useState } from "react";
import Delete from "./Delete";

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

        <section className="flex flex-col gap-y-2">
            {posts.map((t,i) => (
                t != '' &&
                <span key={`title-${i}`} className="flex items-center gap-x-2">
                    {t}
                    <Delete index={i} handleDelete={setPosts}/>
                </span>
            ))}
        </section>
    </>)
}

export default Form;