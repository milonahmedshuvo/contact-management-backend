"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./app/config"));
const contact_routes_1 = require("./app/modules/contact/contact.routes");
const app = (0, express_1.default)();
// const port = 3000
// use middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes 
app.use('/api/v1/contact', contact_routes_1.contactRoutes);
// global error handalar 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "something wrong";
    res.status(statusCode).json({
        success: "false and globar error!",
        message: message,
        stack: config_1.default.node_env == 'development' ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
});
// not found middleware 
app.use((req, res, next) => {
    res.status(400).json({
        success: 'false',
        message: "Page not found ",
        error: ""
    });
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
