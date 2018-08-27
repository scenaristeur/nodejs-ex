require('shelljs/global');
var path = require('path');
console.log(__dirname);
var lance_fuseki = path.join(__dirname, '/fuseki/fuseki start');
exec(lance_fuseki)
