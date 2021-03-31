import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import TeamsIndexContainer from './containers/TeamsIndexContainer.js'
import TeamsFormContainer from './containers/TeamsFormContainer.js'
import NewPlayerContainer from './containers/NewPlayerContainer.js'
import TeamShowContainer from './containers/TeamShowContainer.js'

function App() {

  return (
    <div className='bg-cover h-100vh' style={{backgroundImage: 'url(/sports-stats.png)'}}>
      <Router>
        <nav className='text-center bg-blue-800 text-yellow-300 p-4'>
          <NavLink
            className='inline-block px-4 py-2' 
            activeClassName='text-black'
            exact
            to='/'
            >
              Teams
          </NavLink>

          <NavLink 
            className='inline-block px-4 py-2' 
            activeClassName='text-black'
            to='/teams/new'
            >
              New Team
          </NavLink>
        </nav>
        <Switch>
          <Route exact path='/'>
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
