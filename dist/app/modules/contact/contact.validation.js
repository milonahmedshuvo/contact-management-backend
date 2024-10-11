"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactValidation = void 0;
const zod_1 = require("zod");
const createContactValidationScrema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string(),
        phoneNumber: zod_1.z.string(),
        address: zod_1.z.string(),
        profilePicture: zod_1.z.string(),
    })
});
exports.contactValidation = {
    createContactValidationScrema
};
