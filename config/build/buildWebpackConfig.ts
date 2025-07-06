import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buidlDevServer } from "./buidDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
    const {mode, paths} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        }, 
        devtool: 'inline-source-map',
        devServer: buidlDevServer(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
    };
}