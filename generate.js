const fs = require('fs');
const path = require('path');
const collectCharsInArr = require('./scripts/collectCharsInArr');
const renderFiles = require('./scripts/renderFiles');

// Read Configuration
const config = JSON.parse(fs.readFileSync('./input/config.json', 'utf8'));

// Put all selected alapabet chars into one array and get length.
const chars = collectCharsInArr(fs, path, config.alphabets);
const charsLength = chars.length;

// Render html and css to files
renderFiles(fs, path, config, chars, charsLength);


