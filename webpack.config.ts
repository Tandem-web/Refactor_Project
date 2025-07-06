import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths } from './config/build/types/config';
import path from 'path';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const __PORT__ = 3000; 

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    port: __PORT__,
});

export default config