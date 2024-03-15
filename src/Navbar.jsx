import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Navbar = () => {
  return (
    <div className="navbar mb-5 text-2xl sticky top-0 text-center bg-indigo-700 text-violet-100 font-italic py-5">
        <h2 className="min-w-96">A to Z Recipes</h2>
        <div className=" text-pink-500 font-serif font-light grid grid-cols-3">
        <Link className=' ' to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Query'>Query</Link>
        </div>
    </div>
  )
}

export default Navbar