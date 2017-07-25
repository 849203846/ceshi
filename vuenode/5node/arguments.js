console.log(exports);
console.log(require);
// 在文件外面套了个闭包函数 函数的形参有expoqrts require module __filename __dirname 这五个形参也叫全局变量 可以直接使用
// 实现模块化的规范
// CMD seajs 就近依赖 需要再引即可
// AMD requirejs 依赖前置 先引进来 先定义好 再使用
// commonjs nodejs/ 基于文件读写的 天生自带模块化的，
// 规范了如何定义模块 申明一个js文件 一个文件就是一个模块
// 如何引用一个模块 require
// 如何导出一个模块 exports /module.exports


// 文件模块  核心模块 第三方模块
// 文件模块就是自己写的模块 核心模块就是自带的  第三方模块就是第三方安装的

// expoqrts
// require
// module
// __filename
// __dirname