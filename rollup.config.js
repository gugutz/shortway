import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

const format = process.env.build

export default {
  entry: 'lib/shortway.js',
  moduleName: 'shortway',
  format: format,
  plugins: [
    buble(),
    uglify()
  ],
  dest: `lib/shortway.${format}.js`
}
