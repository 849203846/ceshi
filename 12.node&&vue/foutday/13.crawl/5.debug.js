let debug=require('debug');
// 这个模块用来写日志的
let loggerA=debug('loggerA');
loggerA('a');
// debug打印日志的时候是判断当前环境变量中debug变量的值和当前此日志记录机器的名字是否相匹配 如果匹配在控制台输出 如果不匹配则什么都不做


// window下设置环境变量的方法
// set DEBUG=loggerA
// 上面是赋值 下面是取值
// echo %DEBUG%
{
// mac下设置环境变量的方式
// export DEBUG=loggerA
// echo $DEBUG
 }
 
