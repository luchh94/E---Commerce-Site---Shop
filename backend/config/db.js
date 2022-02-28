import mongoose from 'mongoose'

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,

        })

        console.log(`MongoDB Connect: ${conn.connection.host} ${conn.connection.host.pass}`)
    } catch(err) {
        console.error(`Error: ${err.message}`)
        process.exit(1)

    }
}

export default connectDB;