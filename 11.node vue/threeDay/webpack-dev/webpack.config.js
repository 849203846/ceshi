

let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:'./src/main.js',
    output:{ //出口要求打包到那个路径下，打包文件的名字0
        filename:'bundle.js'  //打包后的文件名

    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            // 从右往左写 先执行css-loader 再执行style-loader\
            {test:/\.css$/,use:['style-loader','css-loader'],exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'}
        ]
    },
    plugins:[ //配置的是webpack插件
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })

    ]
};
