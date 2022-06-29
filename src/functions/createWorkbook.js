const ExcelJS = require('exceljs');

const createWorkbook = async (worksheetName, jsonData) => {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet(worksheetName)
  
  const keys = [...new Set(jsonData.flatMap(item => {
    return Object.keys(item)
  }))]

  const values = jsonData.map(item => {
    return keys.map(key => {
      if(item[key] === undefined) {
        return ''
      }

      return item[key]
    })
  })

  worksheet.columns = keys.map(entry => {
    return {
      header: entry,
      key: entry,
      width: 24
    }
  })

  values.forEach(value => worksheet.addRow(value))

  return workbook
}

module.exports = {
  createWorkbook
}