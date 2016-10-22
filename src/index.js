// Set up your application entry point here...
import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
// import ShelterStore from './stores/ShelterStore';
require('./favicon.ico');
import './styles/stylesheets/styles.scss';
import 'react-widgets/lib/less/react-widgets.less';

import Main from './components/Main';

render (
  <Main />, document.getElementById("app")
);
