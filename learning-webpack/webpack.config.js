module.exports = {
    mode:"development",
    entry:"./index.js",
    output:{
        path:__dirname,
        filename:"dist/main.js"
    },
    module:{
        rules:[
            {test: /\.css$/, loader:"style-loader!css-loader" },
        ]
    }
}