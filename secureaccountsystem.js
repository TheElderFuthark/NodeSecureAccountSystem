"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = __importDefault(require("./application/application"));
class SecureAccountSystem extends application_1.default {
    start() {
        try {
            this.run();
        }
        catch (e) {
            return e;
        }
        return 0;
    }
}
/*  MAIN ENTRY POINT
    ================
*/
const sys = (system = new SecureAccountSystem(null)) => {
    return system.start();
};
console.log(sys());
