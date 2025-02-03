import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

/**
 * Конфиг rollup.
 */
export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/index.esm',
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        peerDepsExternal(),
        typescript({
            tsconfig: './tsconfig.json' // передаем объект настроек напрямую
        }),
        postcss({
            extensions: [
                '.styl'
            ],
            use: [
                ['stylus'],
            ],
            extract: true
        }),
        terser(),
    ],
    external: [
        'react',
        'react-dom'
    ],
};
