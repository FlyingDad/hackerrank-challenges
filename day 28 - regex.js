const emails = [
	['riya', 'riya@gmail.com'],
	['julia', 'julia@julia.me'],
	['julia', 'sjulia@gmail.com'],
	['julia', 'julia@gmail.com'],
	['samantha', 'samantha@gmail.com'],
	['tanya', 'tanya@gmail.com']
];

// Print an alphabetically-ordered list of first names for every user with a gmail account. Each name must be printed on a new line.
function parseEmails(emails) {
	let re = /@(gmail\.com)/;
	let matches = [];
	emails.forEach(data => {
		if(re.test(data[1])) {
			matches.push(data[0]);
		}
	});
	matches.sort();
	matches.forEach(element => {
		console.log(element);
	});
}

parseEmails(emails);
