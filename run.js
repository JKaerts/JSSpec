const fs = require('fs');
const assert = console.assert;

eval(fs.readFileSync('./spec_runner.js')+'');

eval(fs.readFileSync('./spec/variable_spec.js')+'');
eval(fs.readFileSync('./spec/number_spec.js')+'');
eval(fs.readFileSync('./spec/string_spec.js')+'');
eval(fs.readFileSync('./spec/array_spec.js')+'');

summary();