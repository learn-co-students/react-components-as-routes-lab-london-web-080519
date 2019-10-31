import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import routes from '../config/routes';


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar/>
        {
          routes.map(route => (
            <Route
              exact 
              path={route.path}
              component={route.component}
            />
          ))
        }
      </div>
    </Router>
  );
};

export default App
