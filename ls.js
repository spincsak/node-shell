process.stdout.write('prompt > ');

const fs = require('fs');

process.stdin.on('data', (data) => {
  const ls = fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join('\n'));
      process.stdout.write('prompt > ');
    }
  });
});

module.exports = function () {
  process.stdin.on('data', (data) => {
    const ls = fs.readdir('./', 'utf8', (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join('\n'));
        process.stdout.write('prompt > ');
      }
    });
  });
};
