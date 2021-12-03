let csvToJson = require('convert-csv-to-json');

let fileInputName = 'skins.csv'; 
let fileOutputName = 'skins.json';

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName,fileOutputName);