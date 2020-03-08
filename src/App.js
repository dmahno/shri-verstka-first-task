import React, { Component } from 'react';
import './main.scss';
import './assets/icons.scss';
import Main from './pages/main/main.page';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Router, Route, Switch } from 'react-router-dom';
import Settings from './pages/settings/settings.page';
import History from './pages/history/history.page';
import Details from './pages/details/details.page';
// import NotFoundPage from './pages/notFound/notFound.page';
import history from './history';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/settings' component={Settings} />
              <Route path='/history' component={History} />
              <Route path='/details' component={Details} />
            </Switch>
          </Router>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
