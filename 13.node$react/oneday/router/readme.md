 - weipack.router.config.js
 
 ```
     entry:'./router/index.js',指定入口文件
     output:{
         //输出的设置
         path:path.resolve('build'),指定输入的目录 不能写相对路径 只能写绝对路径
         filename:'build.js',//文件名
     },
 
  plugins:[
         new htmlWebpackPlugin({
             template:'./router/index.html'
         })
     ]
     
```
- 配置文件
```
  "scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server --open",
    "build-router": "webpack --config webpack.router.config.js",
    "dev-router": "webpack-dev-server --config webpack.router.config.js --open"
  },
```