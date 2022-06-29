const { createWorkbook } = require('./createWorkbook')

const createLocalFile = async (path, worksheetName, jsonData) => {
  const workbook = createWorkbook(worksheetName, jsonData)

  await workbook.xlsx.writeFile(`${path}/${Date.now()}.xlsx`);
}

module.exports = {
  createLocalFile
}