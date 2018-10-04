import React,{Components} from 'react'; 
import Home from './Home.js';
import Trending from './Trending.js';
import {Switch,Route} from 'react-router-dom';

const Chuttu = () => (
  <h1>Hammad Chuttu</h1>
)

const Main = () =>(
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/trending" component={Trending}/>
  
  

  </Switch>
)
export default Main;


