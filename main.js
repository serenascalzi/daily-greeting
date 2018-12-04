$(document).ready(function() {
	let date = new Date()

	let hour = date.getHours()
	let image = ''
	let greet = ''
	if (hour >= 0 && hour < 12) {
		image = '&#9728;'
		greet = 'Good Morning!'
	} else if (hour >= 12 && hour < 17) {
		image = '&#9729;'
		greet = 'Good Afternoon!'
	} else if (hour >= 17 && hour <= 23) {
		image = '&#9790;'
		greet = 'Good Evening!'
	}

	let day = date.getDay()
	let dayOfWeek = ''
	if (day === 0) {
		dayOfWeek = 'Sunday'
	} else if (day === 1) {
		dayOfWeek = 'Monday'
	} else if (day === 2) {
		dayOfWeek = 'Tuesday'
	} else if (day === 3) {
		dayOfWeek = 'Wednesday'
	} else if (day === 4) {
		dayOfWeek = 'Thursday'
	} else if (day === 5) {
		dayOfWeek = 'Friday'
	} else if (day === 6) {
		dayOfWeek = 'Saturday'
	}

	let month = date.getMonth()
	let monthOfYear = ''
	if (month === 0) {
		monthOfYear = 'January'
	} else if (month === 1) {
		monthOfYear = 'February'
	} else if (month === 2) {
		monthOfYear = 'March'
	} else if (month === 3) {
		monthOfYear = 'April'
	} else if (month === 4) {
		monthOfYear = 'May'
	} else if (month === 5) {
		monthOfYear = 'June'
	} else if (month === 6) {
		monthOfYear = 'July'
	} else if (month === 7) {
		monthOfYear = 'August'
	} else if (month === 8) {
		monthOfYear = 'September'
	} else if (month === 9) {
		monthOfYear = 'October'
	} else if (month === 10) {
		monthOfYear = 'November'
	} else if (month === 11) {
		monthOfYear = 'December'
	}

	let dayOfMonth = date.getDate()

	let year = date.getFullYear()

	let icon = `<h2>${image}</h2>`
	$('#icon').html(icon)

	let greeting = `<h3>${greet}</h3> <h4>It is ${dayOfWeek},</h4> <h4>${monthOfYear} ${dayOfMonth}, ${year}.</h4>`
	$('#greeting').html(greeting)
})
