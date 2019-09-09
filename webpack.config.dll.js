let path = require('path');
let webpack = require('webpack');
module.exports = {
 mode:'development',
 entry:{
  react:['react','react-dom','echarts','antd']
 },
 output:{
  filename:'_dll_[name].js',//产生的文件名_dll_react.js 
  path:path.resolve(__dirname,'public/dll'),
  library:'_dll_[name]',//_dll_react
  // libraryTarget:'var',
 },
 plugins:[
  new webpack.DllPlugin({
   name:'_dll_[name]',//这个name要与output中的library同名
   path:path.resolve(__dirname,'public/dll','manifest.json')
  })
 ]
}
