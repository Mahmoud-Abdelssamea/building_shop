const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema(
  {
    payment: {
      employee: { type: String, default: null },
      customer: { type: String, default: null },
      paymentMthd: {
        type: String,
        default: null,
        enum: ["cash", " half-yearly", "quarter", null],
      },
      noOfYears: {
        type: Number,
        default: null,
      },
      totalInvoices: {
        type: Number,
        default: null,
      },
      noOfPaidInvoices: {
        type: Number,
        default: null,
      },
      paidMoney: {
        type: Number,
        default: null,
      },
      invoicesNo: {
        type: [],
        default: null,
      },
    },
  },
  { timestamps: true }
);

const payment = mongoose.model("payment", PaymentSchema);
module.exports = payment;
