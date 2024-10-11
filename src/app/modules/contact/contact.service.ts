import { TContact } from "./contact.interface";
import { Contact } from "./contact.model";

const createContactFromDB = async (payload:TContact) => {
    const result = await Contact.create(payload)
    return result
}



const getAllContactFromDB = async () => {
    const result = await Contact.find()
    return result
}


const deleteContactFromDB = async (id:string) => {
    const result = await Contact.findByIdAndDelete(id)
    return result
}


const updateContactFromDB = async (id:string, payload: Partial<TContact>) => {

   console.log('update payload', payload)


    const result = await Contact.findByIdAndUpdate(id,  payload)


    console.log('result', result)
    return result
}



export const contactService = {
    createContactFromDB,
    getAllContactFromDB,
    deleteContactFromDB,
    updateContactFromDB
}