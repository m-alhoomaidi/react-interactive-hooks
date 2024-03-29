import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts', 
  output: [
    {
      file: packageJson.main,
      format: 'cjs', // CommonJS, for Node or bundlers
      sourcemap: true, // Optional: Generates source maps
    },
    {
      file: packageJson.module,
      format: 'esm', // ES Module, for modern bundlers
      sourcemap: true, // Optional: Generates source maps
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }), // Compiles TypeScript
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'bundled',
      exclude: /node_modules/,
      presets: ['@babel/preset-env', '@babel/preset-react'], // Adjust presets based on your needs
    }),
    terser(), // Minifies the output
  ],
  external: ['react'], // Assumes React is a peer dependency; adjust as necessary
};
