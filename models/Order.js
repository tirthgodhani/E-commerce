const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: String,
  cartId: String,
  cartItems: [
    {
      productId: String,
      title: String,
      image: String,
      price: String,
      quantity: Number,
    },
  ],
  addressInfo: {
    addressId: String,
    address: String,
    city: String,
    pincode: String,
    phone: String,
    notes: String,
  },
  orderStatus: String,       // e.g. "pending", "confirmed", "shipped"
  paymentMethod: String,     // e.g. "COD"
  paymentStatus: String,     // e.g. "unpaid", "paid"
  totalAmount: Number,
  orderDate: Date,
  orderUpdateDate: Date,
});

module.exports = mongoose.model("Order", OrderSchema);
