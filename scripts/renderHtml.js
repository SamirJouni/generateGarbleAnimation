const generateHtml = require('./generateHtml');
const indexWhitespaces = require('./indexWhitespaces');

const renderHtml = (fs, path, writeToFile, text, textChars, textLength, depth, lottery, chars, charsLength) => {

	const whitespaces = indexWhitespaces(text);
	const htmlUpper = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta http-equiv="X-UA-Compatible" content="ie=edge" /><title>${text}</title><link rel="stylesheet" href="styles.css" /></head><body><div class="text">`;
	const htmlMiddle = generateHtml(textChars, textLength, depth, lottery, chars, charsLength, whitespaces);
	const htmlLower = '</div></body></html>';

	writeToFile(fs, path, 'index.html', htmlUpper, htmlMiddle, htmlLower);
}

module.exports = renderHtml;