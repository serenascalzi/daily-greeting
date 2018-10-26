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
				<p>It is {this.state.weekday}, {this.state.month} {this.state.day}, {this.state.year} &mdash; {this.state.greeting}</p>
			</div>
		)
	}
}

export default Greet
