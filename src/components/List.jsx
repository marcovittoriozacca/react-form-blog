import Delete from "./Delete";
const List = ({posts, setPosts}) => {
    return(<>
        <section className="container mx-auto">
            <div className="flex flex-col gap-y-2">
                {posts.map((t,i) => (
                    <span key={`title-${i}`} className="flex items-center gap-x-2 odd:bg-neutral-100 text-2xl">
                        {t}
                        <Delete index={i} handleDelete={setPosts}/>
                    </span>
                ))}
            </div>
        </section>
    </>)
}
export default List;