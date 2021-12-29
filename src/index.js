import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter,
	Routes,
	Route,
	useRoutes
  } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Projects from './Pages/Projects'


ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
