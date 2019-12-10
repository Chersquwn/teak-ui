import jsx from 'acorn-jsx'
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import clear from 'rollup-plugin-clear'
import alias from '@rollup/plugin-alias'

export default {
  input: 'packages/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'es',
    name: 'teakUI'
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    clear({
      targets: ['lib']
    }),
    alias({
      resolve: ['.tsx', '.ts'],
      entries: {
        'teak-ui/*': 'packages/*'
      }
    }),
    postcss({
      extensions: ['scss']
    }),
    typescript({ jsx: 'preserve' }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    })
  ],
  external: ['react', 'react-dom']
}
