import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home/Home';

class App extends Component {
  
  render() {
    return (
    <div>
      <BrowserRouter>
        <div>
          <Route path = "/" component={Home} exact />
        </div>
      </BrowserRouter>
    </div>
    );
  }
}



export default translate('translations')(App);
