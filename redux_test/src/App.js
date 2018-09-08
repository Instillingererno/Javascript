import React, { Component } from 'react';

// Import components
import Main from './Components/Main';
import PhotoGrid from './Components/PhotoGrid';
import Single from './Components/Single';

// Import react router deps
import { Router, Route } from 'react-router';


const router = (
    <Router>
      <Route path="/" component={Main}>
          <Route exact path="/" component={PhotoGrid} />
          <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
);

class App extends Component {
  render() {
    return (
      <div className="App">
          { router }
      </div>
    );
  }
}

export default App;
