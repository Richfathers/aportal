// “Never give up. Never let things out of your control dictate who you are.
import express from 'express'
import connectDB from "../database/connection.js"
import 'dotenv/config'
import bodyParser from "body-parser";
import morgan from 'morgan'
// fronted 
import path from 'path';
import dev from '../routes/deviceRouter.js'
import emp from '../routes/employeeRouter.js'


import { homepage, createDevicePage, updateDevicePage, createEmployee, showDevice, showEmployee, onlyDevice , deleteDevice} from '../routes/router.js';
import { uploadDevice } from '../controller/deviceController.js';
const __dirname = path.resolve();

const PORT = 3000 || process.env.PORT
const app = express()

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json())
app.use(morgan('tiny'))
app.use('/device', dev)
app.use('/employee', emp)



// load engine
app.set("view engine", "ejs")

// app.set("views", path.resolve(__dirname, ""))

// load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css" )))
app.use('/img', express.static(path.resolve(__dirname,"assets/img" )))
app.use('/js', express.static(path.resolve(__dirname, "assets/js" )))
 


app.get('/', homepage)
app.get('/create-device-button', createDevicePage)
app.get('/update-device-button', updateDevicePage)
app.get('/create-employee-button', createEmployee)
app.get('/show-device-button', showDevice)
app.get('/show-employee-button', showEmployee)
app.get('/only-device/:id', onlyDevice)
app.get('/delete-device/:id', deleteDevice)




// app.get('/' , (req,res)=>{
//    res.render('index')
// })
// app.get('/create-device' , (req,res)=>{
//     res.render('createDevice')
//  })
//  app.get('/create-employee' , (req,res)=>{
//     res.render('createEmployee')
//  })
//  app.get('/show-device' , (req,res)=>{
//     res.render('showDevice')
//  })
//  app.get('/show-employee' , (req,res)=>{
//     res.render('showEmployee')
//  })


 
const wait = async () => {
    await connectDB()
     if(connectDB){
         app.listen(PORT, ()=>{
             console.log(`server is running on port ${PORT}`)
             console.log(__dirname)
         })
     }else{
         console.log("SARmsg: connection to mongoDB is fail , please restart the server")
     }
 }
 wait()
