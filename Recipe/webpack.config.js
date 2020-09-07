const path = require('path');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    const outputDir = (env && env.publishDir)
        ? env.publishDir
        : __dirname;

    return [{
        mode: isDevBuild ? 'development' : 'production',

        devtool: 'inline-source-map',

        stats: { modules: false },

        entry: {
            'WelcomePage': './Scripts/WelcomePageEntry.ts',
        },

        node: {
            __dirname: false
        },

        watchOptions: {
            ignored: /node_modules/
        },

        output: {
            filename: "dist/[name].js",
            path: path.join(outputDir, 'wwwroot'),
            publicPath: '/'
        },

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        devServer: {
            hot: true
        },

        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                {
                    test: /\.tsx?$/,
                    include: /Scripts/,
                    exclude: /node_modules/,
                    loader: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: {
                                useCache: true,
                                useBabel: true,
                                babelOptions: {
                                    babelrc: false
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.tsx?$/,
                    include: /Scripts/,
                    exclude: /node_modules/,
                    loader: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: {
                                useCache: true,
                                useBabel: true,
                                babelOptions: {
                                    babelrc: false
                                }
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(path.join(outputDir, 'wwwroot', 'dist')),
            new CheckerPlugin()
        ]
    }];
};