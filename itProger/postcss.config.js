// module.exports = {
//     plugins: [
//       require('autoprefixer')
//     ]
// }
module.exports = ({ file, options, env }) => ({
    parser: file.extname === '.sss' ? 'sugarss' : false,
    plugins: {
        'cssnano': env === 'production' ? options.cssnano : false
    }
  })