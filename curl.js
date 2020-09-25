
function curlFunc() {
  const request = require('request');
  const urlObject = require('./bash.js');
  console.log('here is the url' + urlObject.name);
  request(urlObject.name, function (error, response, body) {
    //console.error('error:', error);
    //process.stdout.write(response);
    process.stdout.write(body);
    }
  );
}

module.exports = curlFunc();
