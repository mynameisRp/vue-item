const path = require("path");
module.exports = {
    devServer: {
        proxy: {
            "/Api": {
                target: "https://api.thebeastshop.com",
                changeOrgin: true, //设置是否跨域
                pathRewrite: {
                    '^/Api': '' //重写接口
                }
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "@api": path.resolve(__dirname, "./src/api"),
                "@common": path.resolve(__dirname, "./src/common"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@untils": path.resolve(__dirname, "./src/untils"),
                "@views": path.resolve(__dirname, "./src/views"),
                "~": path.resolve(__dirname, "./public"),
                "@assets": path.resolve(__dirname, "./src/assets")
            }
        }
    }
}
