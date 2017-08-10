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
                test:/\.less$/,
                loaders:["style-loader","css-loader","less-loader"]
            },
           {
                test:/\.(eot|svg|woff|woff2|ttf|jpg|png|gif)$/,//如果是bootstrap中的这五种字体的话
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
