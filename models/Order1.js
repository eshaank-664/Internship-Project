// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//     userMail: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// const OrderModel1 = mongoose.model('Order1', orderSchema);

// module.exports = OrderModel1;


const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    userMail: {
        type: String,
        required: true
    },

    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },

    hotelName: {
        type: String,
        required: true
    },
    hotelImage: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

const OrderModel1 = mongoose.model('Order1', orderSchema);

module.exports = OrderModel1;