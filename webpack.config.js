const isProduction = process.argv.indexOf('production') > -1
const mode = isProduction ? 'production' : 'development'

module.exports = {
    mode,
    entry: {
        '../dist/index': './src/index',
        '../docs/js/index': './src/index',
    },
    output: {
        filename: '[name].js',
    },
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