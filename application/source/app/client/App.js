"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const header_1 = __importDefault(require("./components/header"));
const login_1 = __importDefault(require("./components/login"));
const footer_1 = __importDefault(require("./components/footer"));
function App() {
    return (react_1.default.createElement("div", { className: "client_app_root" },
        react_1.default.createElement(header_1.default, null),
        react_1.default.createElement(login_1.default, null),
        react_1.default.createElement(footer_1.default, null)));
}
exports.default = App;
