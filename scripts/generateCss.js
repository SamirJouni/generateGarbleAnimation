const generateCss = (textLength, depth) => {
	let generated = "";
	let counter = 0;

	for (let l = 1; l <= textLength; l++) {
		for (let d = 1; d <= depth; d++) {
			counter++;
			if (!(d === 1 && l === 1)) {
				if (d !== depth) {
					generated +=
						`.pot-${l}-${d} {animation: shuffle1 .1s;animation-delay: ${counter * 0.05}s;}`;
				} else {
					generated +=
						`.pot-${l}-${d} {animation: shuffle2 .1s forwards;animation-delay: ${counter * 0.05}s;}`;
				}
			}
		}
	}

	return generated;
};

module.exports = generateCss;
