import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getCaptions, getTags } from './redux/actions/capCardActions';
import CaptionsByTag from './pages/CaptionsByTag/CaptionsByTag';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';

store.dispatch(getCaptions());
store.dispatch(getTags());

function App() {
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
