import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"

const dataValidateRequst = (schema:AnyZodObject) => {

    return async (req:Request, res:Response, next:NextFunction) => {
        // console.log(req.body)
        // req.body.password,
        // req.body.student,
        

        console.log(' validate zod data:',  req.body.data)


       try{
         // zod data validation 
         await schema.parseAsync({
            body: req.body.data,
        })
         next()
         
       }catch(err){
        next(err)
       }
    }
}


export default dataValidateRequst;