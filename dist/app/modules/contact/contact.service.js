"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactService = void 0;
const contact_model_1 = require("./contact.model");
const createContactFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.Contact.create(payload);
    return result;
});
const getAllContactFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.Contact.find();
    return result;
});
const deleteContactFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.Contact.findByIdAndDelete(id);
    return result;
});
const updateContactFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('update payload', payload);
    const result = yield contact_model_1.Contact.findByIdAndUpdate(id, payload);
    console.log('result', result);
    return result;
});
exports.contactService = {
    createContactFromDB,
    getAllContactFromDB,
    deleteContactFromDB,
    updateContactFromDB
};
