import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import config from './app/config'
import { contactRoutes } from './app/modules/contact/contact.routes'
const app = express()
// const port = 3000


// use middleware
app.use(express.json())
app.use(cors()) 


// application routes 
app.use('/api/v1/contact', contactRoutes)






// global error handalar 
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    
    const statusCode = err.statusCode || 500
    const message = err.message || "something wrong"
    
  
  
  
    res.status(statusCode).json({
      success: "false and globar error!",
      message: message,
      stack: config.node_env =='development'? err?.stack : null, 
    })
  
  })
  
  
  
  
  
  
  
  // not found middleware 
  app.use( (req:Request, res:Response, next:NextFunction) => {
  
    res.status(400).json({
      success: 'false',
      message: "Page not found ",
      error: ""
    })
  })
  









app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app