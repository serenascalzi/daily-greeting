import React, {Component} from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import store from '../store'
import Greet from './Greet'

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<div id='container'>
					<Greet />
				</div>
			</Provider>
		)
	}
}

export default App
