import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';
import photo1 from './Images/Biryani.jpg';
import photo2 from './Images/ChickenTandoori.jpg';
import photo3 from './Images/ChocoLavacake.jpeg';
import photo4 from './Images/Parotta.jpeg';
import photo5 from './Images/Pizza.jpeg';
import Recipelist from './Recipelist';
const Home = () => {
     const images=[
        {id:1,img:photo1,title:'Chicken Biryani',},
        {id:2,img:photo2,title:'Chicken Tandoori'},
        {id:3,img:photo3,title:'Choco Lava Cake'},
        {id:4,img:photo4,title:'Parotta'},
        {id:5,img:photo5,title:'Plain Cheeze Pizza'}
     ]
//const{data:data,pending,error}=useFetch('http://localhost:9000/recipe')
    return ( 
        <div className="container bg-pink-300">
       <div className="recipe-list">
            {images.map((images) => (
                <div key={images.id}>
                     <Link to={`/data/${images.id}`}>  
                     <div className='rounded  bg-white min-w-72 mb-5 m max-w-sm  md:ml-36 md:max-w-md lg:ml-72 lg:max-w-3xl overflow-hidden shadow-lg'>
                    <img className=' w-full' src={images.img} />
                    <div className='px-6 py-4'>
                    <h2 className='text-violet-500  text-center font-bold'>{images.title}</h2>
                    </div>
                    </div>
                    </Link>
                  
                </div>
           ))}
        </div>
    </div>
     );
}
 
export default Home;