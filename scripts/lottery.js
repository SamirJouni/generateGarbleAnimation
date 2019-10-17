const lottery = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const draw = (Math.random() * (max - min + 1) ) << 0;

	return draw;
}

module.exports = lottery;