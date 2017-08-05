### 错误一 端口号被占用 
- config/index.js里面找port去改
### 错误二 更改打包的目的地
- build/webpack。base.conf.js 里面
~~~
module.exports = {
  entry: {
    app: './src/main.js'
  },
~~~
### 错误三 更改配置文件 需要重新启动服务 


## 涉及到less 安装
- npm install less less-loader --save-dev


### vue的ajax
- npm install axios --save

## 通过相同的路径  /book
- 请求的方式不同获取不同的资源
- get 获取 通过路径传播
- pot 修改  通过url路径传id 通过reqbody请求体传输
- delete 删除 reqbody
- post 添加  url

打包代码
## npm run build
把dist上线即可