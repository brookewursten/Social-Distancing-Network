import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.sass';
import Landing from './components/PublicPages/Landing/Landing'
import LogInPage from './components/PublicPages/LogInPage/LogInPage';
import CreateAnAccountPage from './components/PublicPages/CreateAnAccountPage/CreateAnAccountPage';
import { connect } from 'react-redux';
import FeedPage from './components/PrivatePages/FeedPage/FeedPage';
import UserPage from './components/PrivatePages/UserPage/UserPage';
import CreatePostPage from './components/PrivatePages/CreatePostPage/CreatePostPage';
import SettingsPage from './components/PrivatePages/SettingsPage/SettingsPage';
import SearchPage from './components/PrivatePages/SearchPage/SearchPage';

interface Props {
    
}

interface State {
    
}

class App extends React.Component<any, any> {

  render() {

    let privateRoutes = [];

    if (this.props.authenticated){
      privateRoutes.push(
        <Route from='/user/:username' render={() => <UserPage />}/>,
        <Route from='/feed' render={() => <FeedPage/>} />,
        <Route from='/create-post' render={() => <CreatePostPage/>} />,
        <Route from='/settings' render={() => <SettingsPage />} />,
        <Route from='/search/:searchInput' render={() => <SearchPage />} />
      );
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route from='/log-in' render={() => <LogInPage />} />
            <Route from='/create-an-account' render={() => <CreateAnAccountPage />} />
            <Route from='/landing' render={() => <Landing />} />
            {privateRoutes}
            <Route from='/' render={() => <Landing />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };

}

const mapStateToProps = (state: any) => {
  return {
      authenticated: state.authenticated
  }
}

export default connect(mapStateToProps, null)(App);
