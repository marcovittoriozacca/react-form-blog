import { useState } from "react";

const Form = () => {

    //prevent the form from reloading the page on submit
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // title state with setTitle
    const [title, setTitle] = useState('');


    return(
        <form onClick={(e) => handleSubmit(e)}>
            {/* title input field */}
            <div className="flex items-center gap-x-5 p-5 bg-neutral-400">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <button type="submit">Create</button>
        </form>

    )
}

export default Form;