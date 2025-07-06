import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

export function buildLoaders(): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/,
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            // "style-loader",
            "css-loader",
            "sass-loader",
        ],
    }

    return [
        typeScriptLoader,
        scssLoader
    ]
}