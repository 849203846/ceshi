# 搭建react环境
## 初始化项目
```
npm init -y

```
## 安装依赖的模块
开发依赖
```
npm install webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 less less-loader style-loader css-loader url-loader file-loader html-webpack-plugin -D

```
生产依赖
```
npm install react react-dom -S
```
- 知道什么是react元素
- 什么是react组件 如何定义react组件
- 什么是状态和属性 有什么相同点和不同点


## mvvm
- view 视图 看到的网页
- viewmodel 渲染视图需要的模型或者数据
- 用模型渲染视图 双向数据绑定 视图上的操作可以影响模型
- 模型视图 和视图模型 
- model 持久化数据 把数据真正保存了 不会丢失

## 新建webpack.config.js
```
let path=require('path');
module.exports={
    entry:'./src/index.js',//指定入口文件
    output:{
        //输出的设置
        path:path.resolve('build'),//指定输入的目录 不能写相对路径 只能写绝对路径
        filename:'build.js',//文件名
    },
    module:{ //用来配置模块的加载器
        rules:[
            {//如果要价在的模块后缀是.js或者.jsx的话
                test:/\.jsx?$/,
                loader:'babel-loader', //使用loader来加载
                exclude:/node_modules/,//对于mode_modules下面的文件不解析
            }
        ]
    }
};
```


### 更改package.json脚本
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  
  
  "scripts": {
    "build": "webpack"
  },

```


### 启动 打包命令
- 打包到build里面
```
npm run build
```



### 要想让babel工作 需要建一个文件.babelrc


### 自动打包 
```
 "scripts": {
    "build": "webpack",
    "dev":"webpack-dev-server --open"
  },

```

### 自动生成页面 自动打包脚本

```
let path=require('path');
let htmlWebpackPlugin=require('html-webpack-plugin')//自动生成html页面并在里面插入打包后的脚本
module.exports={
    entry:'./src/index.js',//指定入口文件
    output:{
        //输出的设置
        path:path.resolve('build'),//指定输入的目录 不能写相对路径 只能写绝对路径
        filename:'build.js',//文件名
    },
    module:{ //用来配置模块的加载器
        rules:[
            {//如果要价在的模块后缀是.js或者.jsx的话
                test:/\.jsx?$/,
                loader:'babel-loader', //使用loader来加载
                exclude:/node_modules/,//对于mode_modules下面的文件不解析

            }
        ]
    },
    //需要自动产出html文件 并且插入打包后的脚本
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};
```
- 然后自己新建一个index.html
- 把打包后的文件和打包前的文件进行关联 npm run dev


最后的package.json文件
```
let path=require('path');
   let htmlWebpackPlugin=require('html-webpack-plugin');//自动生成html页面并在里面插入打包后的脚本
   module.exports={
       entry:'./src/index.js',//指定入口文件
       output:{
           //输出的设置
           path:path.resolve('build'),//指定输入的目录 不能写相对路径 只能写绝对路径
           filename:'build.js',//文件名
       },
       module:{ //用来配置模块的加载器
           rules:[
               {//如果要价在的模块后缀是.js或者.jsx的话
                   test:/\.jsx?$/,
                   loader:'babel-loader', //使用loader来加载
                   exclude:/node_modules/,//对于mode_modules下面的文件不解析
               },
               {
               test:/\.css$/, //如果文件是css的话
               loaders:["style-loader","css-loader"]
               },
              {
                   test:/\.(eot|svg|woff|woff2|ttf)$/,//如果是bootstrap中的这五种字体的话
                   loader:'url-loader'
               }
   
           ]
       },
       //需要自动产出html文件 并且插入打包后的脚本
       devtool:"source-map",//能让控制台的报错星系指向源代码 而非打包后的文件
       plugins:[
           new htmlWebpackPlugin({
               template:'./src/index.html'
           })
       ]
   };
```