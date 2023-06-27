"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderClient = void 0;
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
//import './index.css';
const App_1 = __importDefault(require("./App"));
//import reportWebVitals from './reportWebVitals';
const renderClient = () => {
    if (typeof (window) !== "undefined") {
        const root = client_1.default.createRoot(document.getElementById('root'));
        root.render(react_1.default.createElement(react_1.default.StrictMode, null,
            react_1.default.createElement(App_1.default, null)));
    }
};
exports.renderClient = renderClient;
