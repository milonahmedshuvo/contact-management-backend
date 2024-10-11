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
exports.contactController = void 0;
const contact_service_1 = require("./contact.service");
const createContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body.data;
        // const body = req.body
        const result = yield contact_service_1.contactService.createContactFromDB(body);
        res.status(200).json({
            success: true,
            message: 'contact create succesfull',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield contact_service_1.contactService.getAllContactFromDB();
        res.status(200).json({
            success: true,
            message: 'contact get succesfull',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield contact_service_1.contactService.deleteContactFromDB(id);
        res.status(200).json({
            success: true,
            message: 'contact get succesfull',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const updateContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const body = req.body;
        // console.log(body)
        const result = yield contact_service_1.contactService.updateContactFromDB(id, body);
        res.status(200).json({
            success: true,
            message: 'contact update succesfull',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.contactController = {
    createContact,
    getAllContact,
    deleteContact,
    updateContact
};
