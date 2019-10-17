const generateCss = require("./generateCss");

const renderCss = (
	fs,
	path,
	writeToFile,
	color,
	shadowColor,
	backgroundColor,
	textLength,
	depth
) => {

	const standard = `html,body {background: ${backgroundColor};padding: 0;margin: 0;outline: 0;color: ${color};font-family: courier, monospace;width: 100%;height: 100%;display: flex;flex-direction: column;justify-content: center;align-items: center;}.text {text-shadow: 0 0 .4px ${shadowColor}, 0 0 .8px ${shadowColor}, 0 0 1.2px ${shadowColor},0 0 1.6px ${shadowColor}, 0 0 2px ${shadowColor}, 0 0 2.4px ${shadowColor};color: ${color};display: flex;flex-direction: row;}.letter {width: 2.4rem;position: relative;}.pot {position: absolute;top:0;left:0;opacity: 0;font-size: 4rem;}@keyframes shuffle1{0%, 100%{opacity: 0;}99.99%{opacity:1;}}@keyframes shuffle2{0%{opacity: 0;}99.99%{opacity:1;}100%{opacity: 1;}}.pot-1-1 {animation: shuffle1 .1s;}`;
	const generated = generateCss(textLength, depth);

	writeToFile(fs, path, "styles.css", standard, generated);
};

module.exports = renderCss;
