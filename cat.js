function catFunc() {
  const fs = require('fs');
  const nameObject = require('./bash.js');

  // console.log('the fileName variable is' + fileName);

  fs.readFile(nameObject.name, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
    }
  });
}

module.exports = catFunc();
