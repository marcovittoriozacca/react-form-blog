
const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form>
            {/* title input field */}
            <div className="flex items-center gap-x-5 p-5 bg-neutral-400">
                <label htmlFor="title">Title</label>
                <input type="text" id="title"/>
            </div>

            <button type="submit" onClick={(e) => handleSubmit(e)}>Create</button>
        </form>
    )
}

export default Form;