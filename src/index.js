const JsonToExcel = require('./functions/createFileBuffer') 

const getBuffer = async (worksheetName, jsonData) => {
	const buffer = await JsonToExcel.createFileBuffer(worksheetName, jsonData);

	console.log(buffer)
}

getBuffer('test', [{a: 1, b: 2}, {a: 3, b: 4, c: 5}])