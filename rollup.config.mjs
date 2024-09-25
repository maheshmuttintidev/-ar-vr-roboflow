import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json'; // Add this line

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs(),
    json(), // Add this line
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env']
    })
  ]
};
