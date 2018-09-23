//Given a date string in the format MM/DD/YYYY, find and return the day name 

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"

const d1 = '10/11/2009', d2 = '11/10/2010';


function getDayName(dateString) {
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let dayName;
	// Write your code here
	const date = new Date(dateString);

	return days[date.getDay()];
}

console.log(getDayName(d1));