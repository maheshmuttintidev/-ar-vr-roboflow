import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd', // Change to 'umd' for browser compatibility
    name: 'arvrroboflowreact', // UMD requires a name for the global variable
    globals: {
      react: 'React' // Tell Rollup that React is external (prevent bundling React)
    },
  },
  external: ['react'], // Don't bundle React, let the app handle it
  plugins: [
    resolve({
      browser: true, // Resolves modules for browser
    }),
    commonjs(), // Convert CommonJS modules to ES6
    json(), // Handle JSON imports
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'] // Add React support
    }),
  ]
};
