import '../public/favicon.ico';
import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { path } from './constants';
import { Pages } from './pages';
import TopBar from './components/TopBar/TopBar';

const App = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location.key]);

  return (
    <React.Fragment>
      <TopBar />
      
      <Switch>
        <Route exact path={path.main} render={Pages.Main} />
        <Route exact path={path.projects} render={Pages.Projects} />
        <Route exact path={path.contact} render={Pages.Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(App);
