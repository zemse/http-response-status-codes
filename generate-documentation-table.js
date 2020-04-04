const HTTP_STATUS = require('./');

let text;

text = Object.entries(HTTP_STATUS).map(rowCollection => {
  const row = Object.entries(rowCollection[1]).map(subRow => `<td>${subRow[0]}</td><td>${subRow[1]}</td>`);
  row[0] = `<td rowspan="${Object.keys(rowCollection[1]).length}">${rowCollection[0]}</td>` + row[0];
  return row.map(row => `<tr>${row}</tr>\n`).join('');
});

console.log([
  '<table>\n\n<tr><th>Response Class</th><th>Constant Name</th><th>Status Code</th></tr>\n',
  ...text,
  '</table>'
].join('\n'));
