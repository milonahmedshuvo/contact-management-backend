import express from 'express'
import { contactController } from './contact.controller'
import dataValidateRequst from '../../middleware/dataValidateRequist'
import { contactValidation } from './contact.validation'

const router = express.Router()

router.post('/create',dataValidateRequst(contactValidation.createContactValidationScrema),  contactController.createContact)


router.get('/all', contactController.getAllContact)
router.delete('/delete/:id',contactController.deleteContact)
router.patch('/update/:id', contactController.updateContact )


export const contactRoutes = router
