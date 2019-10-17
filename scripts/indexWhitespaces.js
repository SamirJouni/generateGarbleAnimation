const countWhitespaces = string => {
	let count = 0;
	const indexed = string
		.split("")
		.map((character, index) => {
			if (character == " ") {
        index = index - count;
        count++;
        return index;
			}
		})
		.filter(value => {
			return value >= 0;
		});

	return indexed;
};

module.exports = countWhitespaces;
