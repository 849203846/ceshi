## commonjs  nodejs

- 建一个js 就是一个模块
- 要引入模块使用require
- 导出模块 exports module.exports


## es6 module
- 建一个js 就是一个模块
- import
- export
- 通过babel转化es6代码
> 在浏览器默认目前不支持，在node中也不识别


## webpack 是一个打包工具
- js和css引用过多会导致请求数过多，可以合理的打包成一个
- 图片 icon图标 转换成base64不会发送http请求
- 用es6模块化 webpack集成babel 转化es6代码转成es5
- less sass stylus 自动编译
- 压缩代码
- 可以实现提供端口号，实现自动刷新的功能
### 先安装webpack
- 不建议安装到全局,最好选用本地安装，不会导致版本问题
~~~
npm install webpack -g
~~~
##  本地安装
~~~
npm install webpack --save-dev
~~~
## 跑起webpack
- 改package.josn里的
 "scripts": {
   "start": "webpack"
  },
~~~
npm run start
~~~

-  webpack.config.js名字是默认的 就叫这个名字
-  写webpack 最重要的要有入口和出口，配置可以采用node的写法
 - module.exports={}
 ~~~
 module.exports={
     entry:'./src/main.js',
     output:{ //出口要求打包到那个路径下，打包文件的名字
         path:path.resolve('dist'),//打包路径必须是绝对路径
         filename:'bundle.js'  //打包后的文件名
 
     }
 };
 ~~~
 - 会将代码打包到dist目录下，自动识别commonjs规范es6规范
 - 给js文件配一个翻译官，翻译将es6转换成es5
 - babel 将代码转义 babel-core(核心包) babel-loader(翻译官) --save-dev
 ~~~
     module:{
         rules:[
             {test:/\.js$/,use:'babel-loader',exclude:'/node_modules/'}
             //use 使用某个翻译官（加载器）
             //要排除掉node_modules
         ]
     }
 ~~~
 - 创建一个.babelrc文件 
 - 告诉翻译如何翻译
 ~~~
 {
   "presets":["es2015"]
 }
 ~~~
 - 下载翻译官用的es2015
 ~~~
 npm install babel-preset-es2015
 ~~~
- stage-0 stage-1 stage-2 stage-3 es6=stage-4
- stage-0是功能最多的 会自动安装后面的234版本
- 翻译es7语法  
 ~~~
npm install babel-preset-stage-0 --save-dev
 ~~~
 设置翻译官文件
 ~~~
 {
   "presets":["es2015","stage-0"]
 }
 ~~~
 
 ## 翻译cs样式需要css加载器
 - css-loader是为了识别css样式
 - style-loader为了插入到html中 
 ~~~
 npm install css-loader style-loader --save-dev
 ~~~
 - 配置翻译官文件
 ~~~
 
module.exports={
    entry:'./src/main.js',
    output:{ //出口要求打包到那个路径下，打包文件的名字
        path:path.resolve('dist'),//打包路径必须是绝对路径
        filename:'bundle.js'  //打包后的文件名

    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:'/node_modules/'},
            // 从右往左写 先执行css-loader 再执行style-loader\
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    }
};

 ~~~
 
 ## less加载器
 ~~~
 npm install less-loader less --save-dev
 ~~~
 
 - 配置翻译官
 ~~~
 module.exports={
     entry:'./src/main.js',
     output:{ //出口要求打包到那个路径下，打包文件的名字
         path:path.resolve('dist'),//打包路径必须是绝对路径
         filename:'bundle.js'  //打包后的文件名
 
     },
     module:{
         rules:[
             {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
             // 从右往左写 先执行css-loader 再执行style-loader\
             {test:/\.css$/,use:['style-loader','css-loader'],exclude:/node_modules/},
             {test:/\.less$/,use:['style-loader','css-loader','less-loader'],exclude:/node_modules/}
         ]
     }
 };
 ~~~
 
 ## 图片加载器
 ~~~
 npm install url-loader file-loader --save-dev
 ~~~
  - 配置翻译官
~~~
{test:/\.(jpg|png|gif)$/,use:'url-loader'}
              
~~~


- {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'}如果图片大小是8192之内的转化成base64 否则原图


## 打包html
~~~
npm install html-webpack-plugin --save-dev
~~~

## 启动webpack服务 实现热更新
- 在内存中打包
~~~
npm install webpack-dev-server --save-dev
~~~

package.json里面 修改代码  build    -p是压缩js
 "start": "webpack-dev-server" 开启热更新  --port 3000指定端口3000
~~~
 "scripts": {
                  "build": "webpack -p",
                      "start": "webpack-dev-server --port 3000",
                        "dev":"webpack-dev-server"
                },
~~~