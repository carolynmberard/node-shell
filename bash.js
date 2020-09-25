process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    const pwdFunc = require('./pwd');
    pwdFunc;
  } else if (cmd === 'ls') {
    const lsFunc = require('./ls');
    lsFunc;
  } else if (cmd.startsWith('cat ')) {
    const fileName = cmd.slice(4);
    module.exports = { name: fileName };
    const catFunc = require('./cat');
    catFunc;
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});

// process.stdin.on('pwd', )
// take in `pwd`
// access file path with a module property?
// path.relative(from, to)
// hardcode 'from' to be user/home directory
// hardcode 'to' to be current directory process.cwd
// to = process.cwd()
// possibly re-order??
//
