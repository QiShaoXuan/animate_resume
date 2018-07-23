const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    //entry为入口,webpack从这里开始编译
    mode: 'development',
    entry: [
        "babel-polyfill",
        path.join(__dirname, './src/index.js')
    ],
    //output为输出 path代表路径 filename代表文件名称
    output: {
        path: path.join(__dirname, './docs'),
        filename: 'bundle.[hash:8].js',
        chunkFilename: '[name].[hash:8].js'
    },
    //module是配置所有模块要经过什么处理
    //test:处理什么类型的文件,use:用什么,include:处理这里的,exclude:不处理这里的
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader?modules&localIdentName=[local]-[hash:base64:5]"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use: ['css-loader', 'postcss-loader', 'less-loader'],
                    // 在开发环境使用 style-loader
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192  //8k一下的转义为base64
                    }
                }]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['bundle']),
        new htmlWebpackPlugin({
            filename: "index.html",  //打包后的文件名
            template: path.join(__dirname, "./src/index.html")  //要打包文件的路径
        }),
        new ExtractTextPlugin({
            filename: 'index.[hash:8].css'
        }),

    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'bundle'),  //启动路径
        host: 'localhost',  //域名
        port: 8018,  //端口号
    },
    devtool: 'source-map'
}
