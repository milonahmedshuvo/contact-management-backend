import { z } from 'zod'



const createContactValidationScrema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string(),
        phoneNumber: z.string(),
        address: z.string(),
        profilePicture: z.string(),
    })
})





export const contactValidation ={
    createContactValidationScrema
}