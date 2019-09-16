import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './redux/store';

import AppRouter from './router/Router';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppRouter/>
		</BrowserRouter>
	</Provider>,
	document.getElementById('container')
);

