import mongoose from 'mongoose'
const { Schema , model } = mongoose
const ustroystva = new Schema({
   deviceID: {
       type: String,
       required: true,
       unique: true,
       trim: true
   },
   type: {
       type: String,
       trim: true
   },
   deviceName: {
       type: String,
       required: true
   },
   deviceSN:{
       type: String,
       required:true,
       unique: true,
       trim: true
   },
   price: {
    type: String,
    trim: true
   },
   owner: {
       type: String,
       trim: true
   },
   ownersOffice: {
       type: String,
       trim: true
   },
   ownersDepartment: {
       type: String,
       trim: true
   },
   ownersLocation: {
       type: String,
       trim: true
   },
   ownersPost: {
       type: String,
       trim: true
   },
   corporativePhone: {
       type: String,
       trim: true
   },
   personalPhone: {
       type: String,
       trim: true
   },
   deviceCharacteristics: {
     type: String,
     required: true  
   },
   vendor: {
    type: String,
    trim: true
   },
   cratedData: {
    type: String,
    trim: true
   },
   history: {
       type: String
   },
   
   
 
//    attachedTo: {
//     type: Schema.Types.ObjectId, 
//     ref: "sotrudnik"
//    },

   
   photos: [{
        type: [String, 'you can upload only 3 photos'],
        trim: true
    }]

   },
    { timestamps: true },
)


const ustroystvo = model('devices', ustroystva)

export default  ustroystvo