"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class LoginForm extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { className: "AppLoginForm" },
            react_1.default.createElement("header", null,
                react_1.default.createElement("form", null,
                    react_1.default.createElement("input", { className: "AppUsername", id: "txtUsernane", type: "text", placeholder: "Enter username/email... " }),
                    react_1.default.createElement("input", { className: "AppPassword", id: "txtUsernane", type: "password", placeholder: "Enter password... ", autoComplete: "true" }),
                    react_1.default.createElement("input", { className: "AppLoginButton", id: "btnLoginButton", type: "button", value: "Login" })))));
    }
}
exports.default = LoginForm;
