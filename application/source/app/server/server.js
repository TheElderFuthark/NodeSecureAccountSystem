"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./api/api"));
class Server extends api_1.default {
    startInitialServerRun(server, port) {
        this.sendFiles(server);
        this.runFinally(server, port);
    }
    initiateServer() {
        const s = this.makeServer();
        return s;
    }
    buildServerAddress(details) {
        return "" +
            details.protocol +
            details.address +
            details.port +
            details.domain;
    }
    getServerAddress() {
        return {
            protocol: this.getProtocolType(),
            address: this.getHostAddress(),
            port: this.getPort(),
            domain: this.getDomain()
        };
    }
    constructor(props) {
        super();
    }
}
exports.default = Server;
