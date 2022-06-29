const { createWorkbook } = require('./createWorkbook')
const fs = require('fs')

const createLocalFile = async (path, worksheetName, jsonData) => {
  const workbook = await createWorkbook(worksheetName, jsonData)
  await fs.promises.mkdir(path, { recursive: true })

  await workbook.xlsx.writeFile(`${path}/${Date.now()}.xlsx`);
}

module.exports = {
  createLocalFile
}