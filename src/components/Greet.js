import React, {Component} from 'react'
import {getGreeting, getWeekday, getMonth, getDay, getYear} from '../actions/actions'

class Greet extends Component {
	
	state = {
		greeting:getGreeting(),
		weekday:getWeekday(),
		month:getMonth(),
		day:getDay(),
		year:getYear()
	}

	render() {
		return (
			<div>
				<h2>{this.state.greeting}</h2>
				<h3>It is {this.state.weekday}, {this.state.month} {this.state.day}, {this.state.year}.</h3>
			</div>
		)
	}
}

export default Greet
