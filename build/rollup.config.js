import babel from 'rollup-plugin-babel'
import buble from 'rollup-plugin-buble'
import typescript from 'rollup-plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

export default {
  input: 'packages/index.ts',
  output: {
    file: 'dist/js/main.min.js',
    format: 'umd',
    name: 'bundle-name'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    typescript(),
    buble(),
    postcss({
      extensions: ['scss'],
      plugins: [
        autoprefixer({
          browsers: [
            'last 2 versions',
            'iOS >= 8',
            'Android >= 4.4',
            '> 1%',
            'last 3 iOS versions'
          ]
        })
      ]
    })
  ],
  external: ['react', 'react-dom']
}
