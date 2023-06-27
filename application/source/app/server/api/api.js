"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const path = require("path");
class API {
    constructor() {
        this.server = null;
    }
    runFinally(server, port) {
        server.listen(port, () => {
            console.log("Server is online at port: " + port + "... ");
        });
    }
    sendFiles(server) {
        server.get("/", (req, res) => {
            res.sendFile("public/index.html", { root: "public/" }, (e) => {
                console.error(e);
            });
            res.sendFile("public/styles/index.css", { root: "public/styles/" }, (e) => {
                console.error(e);
            });
        });
    }
    makeServer() {
        this.server = Express();
        this.server.use(Express.static("public"));
        return this.server;
    }
    getDomain() {
        return "/";
    }
    getPort() {
        return 4080;
    }
    getHostAddress() {
        return "127.0.0.1";
    }
    getProtocolType() {
        return "http://";
    }
}
exports.default = API;
