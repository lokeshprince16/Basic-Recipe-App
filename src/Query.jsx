const Query = () => {
    const alertmessage=()=>{
      
       alert('Your Query submited');
    }
  return (
    <div className="  border-purple-800 max-w-500 text-center p-4 m-4 mt-9">
        <h2 className="text-center mx-5 text-green-900 text-2xl">Inform Your Queries !!!</h2>
        <br/>
        <form className="  text-violet-500 inline-block text-start" onSubmit={alertmessage} >
            <label className="mb-5">Your Name:</label>
            <br/>
            <input className=" p-4 text-pink-500 bg-green-100 w-full"  type="text" required ></input>
            <br/>
            <label className="mt-5">Type your Query:</label>
            <br/>
            <textarea className="w-full text-pink-500  bg-green-100 border-gray-200"required></textarea>
            <br/>
            <button className="w-full mt-5 font-serif text-white bg-pink-500">Submit</button>
        </form>
    </div>
  )
}

export default Query