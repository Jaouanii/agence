import List from "./Liste"
import '../../homepage/article/article.css'


const ListService =()=>{
    const listes = [
        {src:"/service1.png", titre: "Design"},
        {src:"/service2.png", titre: "Dev"},
        {src:"/service3.png", titre: "Marketing"},
        {src:"/service4.png", titre: "Business"},
        {src:"/service5.png", titre: "Tech"},
        {src:"/service6.png", titre: "Tragedie"},
    ]

    return (<div class="grid-3cols">{
        listes.map((value, src, titre) =>
            (<List
                src= {`/src/assets/imgService${value.src}`}
            titre= {value.titre} />
            
            ))}
</div>

     
    )

}

export default ListService
