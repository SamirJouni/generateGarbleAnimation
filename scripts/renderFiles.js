const lottery = require('./lottery');
const renderHtml = require('./renderHtml');
const renderCss = require('./renderCss');
const writeToFile = require('./writeToFile');

const renderFiles = (fs, path, config, chars, charsLength) => {
	const { color, shadowColor, backgroundColor, text, depth } = config;

	const textChars = text.replace(/\s/g,'');
	const textLength = text.replace(/\s/g,'').length;

	renderHtml(fs, path, writeToFile, text, textChars, textLength, depth, lottery, chars, charsLength);
	renderCss(fs, path, writeToFile, color, shadowColor, backgroundColor, textLength, depth);
}

module.exports = renderFiles;