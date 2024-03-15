import useFetch from "./useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const RecipeDetails = () => {
  const{id}=useParams();
   const{data,pending,error}=useFetch('http://localhost:9000/recipe/'+id);
  return (
    <div className="bg-cyan-200">
      {data && (<article>
        <h2 className="text-center font-bold text-2xl text-pink-500">{data.title}</h2>
        <hr className="border-gray-500"/>
        <p className="justify-center min-w-sm space-x-12 text-green-900">Steps for Making:
           <br/> {data.data}</p>
      </article>)}
    </div>
  )
}

export default RecipeDetails