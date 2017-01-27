import uglify from 'rollup-plugin-uglify'
import buble from 'rollup-plugin-buble'

export default {
  entry: 'lib/shortway.js',
  format: 'umd',
  moduleName: 'shortway',
  plugins: [
    buble(),
    uglify()
  ],
  dest: 'lib/shortway.umd.js'
}
