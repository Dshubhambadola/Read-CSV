/**
 * Created by shubham on 2/5/17.
 */
var fs = require('fs');
var csv = require('fast-csv');

fs.createReadStream('marketing_company_products (6).csv').pipe(csv()).on('data',function (data) {
    console.log(data);
}).on('end',function (data) {
   console.log('Read finished');
});