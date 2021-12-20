const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log('Conection Success')
    } catch (e) {
        throw new Error('Error Conection')
    }
}
 
module.exports = {
    dbConnect
}