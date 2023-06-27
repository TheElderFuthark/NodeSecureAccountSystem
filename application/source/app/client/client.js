"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class Client {
    startRender() {
        try {
            (0, index_1.renderClient)();
        }
        catch (e) {
            return false;
        }
        return true;
    }
}
exports.default = Client;
