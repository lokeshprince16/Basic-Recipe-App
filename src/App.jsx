import Home from './Home'
import Navbar from './Navbar'
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';
import './index.css'
import RecipeDetails from './RecipeDetails'
import Query from './Query';
import About from './About';
function App() {
    return (
    <>
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route  path='/data/:id'>
              <RecipeDetails/>
            </Route>
            <Route  path='/Query'>
              <Query/>
            </Route>
            <Route  path='/About'>
              <About/>
            </Route>
            
           
          </Switch>
      
      </Router>
    </div>
    </>
  )
}

export default App
