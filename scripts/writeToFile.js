const writeToFile = (fs, path, fileName, ...strs) => {
	const string = strs.join('');
	const pathToFile = path.join(__dirname, '../output', fileName);

	fs.writeFile(pathToFile, string, 'utf8', (err) => {
			if (err) throw err;
	})

}

module.exports = writeToFile;