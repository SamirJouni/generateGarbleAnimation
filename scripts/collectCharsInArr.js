const collectCharsInArr = (fs, path, alph) => {
	const chars = alph.map(lang => JSON.parse(fs.readFileSync(path.join(__dirname, `../input/alphabets/${lang}.alph.json`), 'utf8')).alph).reduce((acc, cur) => acc.concat(cur), []);
	return chars;
};

module.exports = collectCharsInArr;