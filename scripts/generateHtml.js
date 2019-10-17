const generateHtml = (
	textChars,
	textLength,
	depth,
	lottery,
	chars,
	charsLength,
	whitespaces
) => {
	let generated = "";

	for (let l = 1; l <= textLength; l++) {
		generated += `<div class="letter">`;
		for (let d = 1; d <= depth; d++) {

			const draw = lottery(0, charsLength - 1);
			const char = chars[draw];

			if (d !== depth) {
				generated += `<div class="pot-${l}-${d} pot">${char}</div>`;
			} else {
				if (!(whitespaces.includes(l))){
				generated += `<div class="pot-${l}-${d} pot">${
					textChars[l - 1]
				}</div></div>`;
			} else {
				generated += `<div class="pot-${l}-${d} pot">${
					textChars[l - 1]
				}</div></div><div class="letter">${" "}</div>`;
			}
			}
		}
	}

	return generated;
};

module.exports = generateHtml;
