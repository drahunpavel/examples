import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import HeaderBlock from './components/HeaderBlock/HeaderBlock';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Fragment>
		<HeaderBlock/>
	</Fragment>
	,document.getElementById('container') 
);

