const webpackMerge = require('webpack-merge');
const commonConfig = require('./core');

module.exports = webpackMerge(commonConfig(), {
  entry: {
    'dnd-multi-backend': './packages/dnd-multi-backend/src/index.js',
    'react-dnd-multi-backend': './packages/react-dnd-multi-backend/src/index.js',
    'rdnd-html5-to-touch': './packages/rdnd-html5-to-touch/src/index.js',
    'react-dnd-preview': './packages/react-dnd-preview/src/index.js',
  },
  output: {
    path: `${__dirname}/..`,
    filename: 'packages/[name]/dist/umd/[name].min.js',
    libraryTarget: 'umd',
    library: '[name]',
  },
  externals: {
    // Use external version of React and ReactDnD
    react: 'React',
    'react-dnd': 'ReactDnD',
  },
});
