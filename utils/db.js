const mongoose = require('mongoose')

url = 'mongodb+srv://dong123:dong123@cluster0.0tyl5.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(res => "okela")
    .catch(err => console.log(err))

mongoose.set('strictQuery', false);

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User