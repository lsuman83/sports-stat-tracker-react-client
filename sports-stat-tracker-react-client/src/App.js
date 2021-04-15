 import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import TeamsIndexContainer from './containers/TeamsIndexContainer.js'
import TeamsFormContainer from './containers/TeamsFormContainer.js'
import NewPlayerContainer from './containers/NewPlayerContainer.js'
import TeamShowContainer from './containers/teams/TeamShowContainer.js'


function App() {

  return (
    <div className='grid grid-rows-3 bg-cover 100vh' style={{backgroundImage: 'url(https://www.greenbiz.com/sites/default/files/styles/panopoly_image_full/public/images/articles/featured/sports_eugene_onischenko_sstock.jpg?itok=h-0TKwO4)'}}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/teams'>
            <TeamsIndexContainer />
          </Route>       
          <Route 
            path='/teams/new' 
            component={TeamsFormContainer} 
            />
          <Route 
            path='/teams/:teamID/players/new' 
            component={NewPlayerContainer} 
            />
          <Route 
            path='/teams/:teamID' 
            component={TeamShowContainer} 
            />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
