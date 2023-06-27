"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./source/app/app"));
class Application extends app_1.default {
    run() {
        try {
            const details = this.runSetup();
            this.runServer(details);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    constructor(props) {
        super();
    }
}
exports.default = Application;
