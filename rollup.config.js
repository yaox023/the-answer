const pkg = require('./package.json');

export default {
  entry: 'src/index.js',
  targets: [
    { dest: pkg.main, format: 'cjs' },
  ]
};