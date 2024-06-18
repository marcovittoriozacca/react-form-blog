import Delete from "./Delete";
const List = ({posts, setPosts}) => {
    return(<>
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
export default List;