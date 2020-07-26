const mongoose = require('mongoose')


const schema = mongoose.Schema


const credito = new schema({
    name: {
        type: String,
        required: true,

    },
    valor: {
        type: Number,
        required: true,
        min: 1,
    },
    month: {
        type: Number,
        required: true,
        min: 1,
        max: 12,
    },
    year: {
        type: Number,
        required: true,
        min: 1970
    }
})
mongoose.model("credito", credito)