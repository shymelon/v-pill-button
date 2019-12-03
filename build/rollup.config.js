import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';

export default {
    input: 'src/main.js',
    output: {
        name: 'VPillButton',
        exports: 'named'
    },
    plugins: [
        commonjs(),
        vue({
            css: true,
            compileTemplate: true,
        }),
        buble()
    ],
};
