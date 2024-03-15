import {Link} from 'react-router-dom'
const Recipelist = ({data}) => {
  return (
    <div>
    {data.map((data)=>(
        <div key={data.id} >         
         <h2>{data.title}</h2>
        </div>
    ))}
    </div>
 
  )
}

export default Recipelist