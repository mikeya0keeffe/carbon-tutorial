import React, { Component } from 'react';
import { Button, Content } from 'carbon-components-react';
import { Route, Router, Switch } from 'react-router-dom';

import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

import './app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repo" component={RepoPage} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
