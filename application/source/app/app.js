"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
class App {
    constructor() {
        this.server = null;
    }
    runServer(obj) {
        const s = this.server.initiateServer();
        this.server.startInitialServerRun(s, obj.port);
    }
    runSetup() {
        this.server = new server_1.default(null);
        return this.server.getServerAddress();
    }
}
exports.default = App;
