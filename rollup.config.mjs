import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import polyfillNode from 'rollup-plugin-polyfill-node';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(), // Handle JSON imports
    polyfillNode(),  // Add this to polyfill Node.js modules for browser
    babel({ babelHelpers: 'bundled' }),
    terser(),
  ],
};
