import { NextFunction, Request, Response } from "express"
import { contactService } from "./contact.service"

const createContact = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const body = req.body.data
        // const body = req.body
        const result = await contactService.createContactFromDB(body)


        res.status(200).json({
            success: true,
            message: 'contact create succesfull',
            data: result
        })
    } catch (err) {
        next(err)
    }
}



const getAllContact = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const result = await contactService.getAllContactFromDB()


        res.status(200).json({
            success: true,
            message: 'contact get succesfull',
            data: result
        })


    } catch (err) {
        next(err)
    }
}





const deleteContact = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const id = req.params.id
        const result = await contactService.deleteContactFromDB(id)
        res.status(200).json({
            success: true,
            message: 'contact get succesfull',
            data: result
        })
    } catch (err) {
        next(err)
    }
}



const updateContact = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const id = req.params.id
        const body = req.body
        // console.log(body)
        const result = await contactService.updateContactFromDB(id, body)
        res.status(200).json({
            success: true,
            message: 'contact update succesfull',
            data: result
        })
    } catch (err) {
        next(err)
    }
}



export const contactController = {
    createContact,
    getAllContact,
    deleteContact,
    updateContact
}