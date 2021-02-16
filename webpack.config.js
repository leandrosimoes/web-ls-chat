const isProduction = process.argv.indexOf('production') > -1
const mode = isProduction ? 'production' : 'development'

module.exports = {
    mode,
    entry: {
        '../dist/ls-chat.min': './src/index',
        '../docs/js/ls-chat.min': './src/index',
    },
    output: {
        filename: '[name].js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: true,
                    },
                  },
                ],
            },
        ],
    },
    target: 'web',
}