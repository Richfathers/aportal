import mongoose from 'mongoose'
const { Schema , model } = mongoose
const satrudnik = new Schema({
    employeeID:{
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    company: {
     type: String,
     minlength: [2," so short company" ],
     maxlength: [50, "soo long company"] 
    },
    department: {
        type: String,
        minlength: [2," so short department" ],
        maxlength: [50, "soo long department"]
    },
    post: {
     type: String,
     minlength: [2," so short post" ],
     maxlength: [50, "soo long post"]
    },
    devices: [{
        type: Schema.Types.ObjectId, 
        ref: "device"
    }],
},
{ timestamps: true },
)
 
 
 const sotrudnik = model('sotrudnik', satrudnik )

 export default sotrudnik