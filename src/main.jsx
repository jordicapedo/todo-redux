import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import App from './App'
import { asyncMiddleweare } from './middlewares/async'
import { reducer } from './features/todos'
import { Provider } from 'react-redux'
import './index.css'

const store = createStore(reducer, applyMiddleware(asyncMiddleweare))

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
