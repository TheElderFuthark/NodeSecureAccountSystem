"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class Header extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { className: "AppFooter" },
            react_1.default.createElement("header", null,
                react_1.default.createElement("p", null, "Footer text"))));
    }
}
exports.default = Header;
