process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    const filePath = __dirname;
    process.stdout.write(filePath);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
})

// process.stdin.on('pwd', )
// take in `pwd`
// access file path with a module property?
// path.relative(from, to)
// hardcode 'from' to be user/home directory
// hardcode 'to' to be current directory process.cwd
// to = process.cwd()
// possibly re-order??
//
