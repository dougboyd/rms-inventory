const fetch = require('node-fetch');
const util = require('util');
const parseXML = util.promisify(require('xml2js').parseString);

const x = fetch(
    'https://www.goodreads.com/author/show.xml?id=4432&key=txK5Nml3SKrrHdeHzrW0jg'
)
.then(response => response.text())
.then(parseXML);

x