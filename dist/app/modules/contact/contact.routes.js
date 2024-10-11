"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRoutes = void 0;
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("./contact.controller");
const dataValidateRequist_1 = __importDefault(require("../../middleware/dataValidateRequist"));
const contact_validation_1 = require("./contact.validation");
const router = express_1.default.Router();
router.post('/create', (0, dataValidateRequist_1.default)(contact_validation_1.contactValidation.createContactValidationScrema), contact_controller_1.contactController.createContact);
router.get('/all', contact_controller_1.contactController.getAllContact);
router.delete('/delete/:id', contact_controller_1.contactController.deleteContact);
router.patch('/update/:id', contact_controller_1.contactController.updateContact);
exports.contactRoutes = router;
