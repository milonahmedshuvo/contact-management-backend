"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = require("mongoose");
const contactSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, default: '' },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    profilePicture: { type: String, required: true },
});
// creating model
exports.Contact = (0, mongoose_1.model)('Contact', contactSchema);
