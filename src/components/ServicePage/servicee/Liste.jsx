
const List = ({src, titre }) => {
    return (
        <>
            <article class="article-service">
					<img src={src} alt=""/>
					<h3 class="article-service-title">{titre}</h3>
			</article>
        </>
        
    )
}

export default List












