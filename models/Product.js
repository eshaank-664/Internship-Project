const mongoose = require('mongoose');


const HotelSchema = new mongoose.Schema({

imageUrl:{
    type: String,
    required: true
},
name :{
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
price:{
    type: Number,
    required: true
},
rating:{
    type: Number,
    required: true
},
location:{
    type:String,
    required:true
},
createdAt: {
    type: Date,
    default: Date.now
}   
});

const HotelModel = mongoose.model('Hotel', HotelSchema)

module.exports = HotelModel