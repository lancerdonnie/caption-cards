import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CaptionsByTag from './pages/CaptionsByTag/CaptionsByTag';
import { getCaptions, getTags } from './redux/actions/capCardActions';
import Error from './pages/Error/Error';

function App() {
  store.dispatch(getCaptions());
  store.dispatch(getTags());
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/filter' component={CaptionsByTag} />
            <Route path='/*' component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
