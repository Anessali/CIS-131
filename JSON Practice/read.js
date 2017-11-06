/** Documentation used:
 * https://www.npmjs.com/package/jsonfile
 * https://www.w3schools.com/nodejs/nodejs_intro.asp
 * https://lodash.com/docs/4.17.4#forEach 
 */
var _ = require('lodash');
var json = require('jsonfile');
const file = 'data.json';
json.readFile(file, function(err, data) {
    console.log("----------");
    for (i = 0; i < data.items.length; i++) {
        _.forEach(data.items[i], function(value) {
            console.log(value);
        });
        console.log("----------");
    };
});