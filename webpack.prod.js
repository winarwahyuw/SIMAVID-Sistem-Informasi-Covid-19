const merge=require("webpack-merge");
const common=require("./webpack.common");

module.exports=merge(common, {
    mode: "production",
    module: {
        rules:[
            {
                test: /\.css$/,
                exclude: "./node_modules",
                use:[
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    }
})