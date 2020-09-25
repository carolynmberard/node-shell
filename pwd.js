function pwdFunc() {
  const filePath = __dirname;

  process.stdout.write(filePath);
}

module.exports = pwdFunc();
