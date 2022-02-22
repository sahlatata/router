import { useParams,useNavigate } from "react-router-dom"

const DescriptionCard =({tab})=>{
const {id} = useParams()
const navigate = useNavigate()
const cardToFind = tab.find(el => el.id == id)
return(
    <div>
    <h1>{cardToFind.title}</h1>
    <p>{cardToFind.description}</p>
    <img src={cardToFind.posterURL}/>
    
<iframe width="560" height="315" src={cardToFind.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<button onClick={()=>navigate('/cards')}>Go Back</button>
    </div>
   
)


}
export default DescriptionCard