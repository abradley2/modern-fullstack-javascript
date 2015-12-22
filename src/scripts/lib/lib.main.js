import _ from 'lodash';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './util/router.js';
import ViewMediator from './util/ViewMediator.js';

window._ = _;
window.Backbone = Backbone;
window.React = React;
window.ReactDOM = ReactDOM;

window.Router = Router;
window.ViewMediator = ViewMediator;
