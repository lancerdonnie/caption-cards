import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home/Home';
import { Route, Switch } from 'react-router-dom';
import CaptionsByTag from './pages/CaptionsByTag/CaptionsByTag';
import { getCaptions, getTags } from './redux/actions/capCardActions';

function App() {
  store.dispatch(getCaptions());
  store.dispatch(getTags());
  return (
    <Provider store={store}>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cbt' component={CaptionsByTag} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
