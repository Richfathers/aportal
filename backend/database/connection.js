import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1/Device&Employee")

        console.log(`mongoDB connected: ${conn.connection.host}`)
        
    } catch (error) {
        console.log(error)
    }
}
export default connectDB