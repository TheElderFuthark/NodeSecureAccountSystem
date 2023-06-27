const path = require("path");


module.exports = {
    entry: "./application/source/app/client/client.js", 
    output: {
        path: path.resolve("./public/", "./scripts/"), 
        filename: "client.bundle.js",
        library: "clientapp",
    },

};