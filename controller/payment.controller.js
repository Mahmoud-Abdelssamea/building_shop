const paymentModel = require("../model/payment.model");
const buildingModel = require("../model/buildingModel");
const paymentDetails = require("../utils/paymentDetails");
const MyHelper = require("../utils/helper");
const createInvoice = require("../utils/createInvoice");
const fs = require("fs");
const path = require("path");
class Payment {
  //
  //----------------------------------Sell Single Unit----------------------------//
  //

  static sellSingleUnit = async (req, res) => {
    try {
      const { buildingId, unitId } = req.params;
      let { customer, paymentMthd, noOfYears } = req.body;
      const user = req.user;
      const employee = user.fName + " " + user.lName;

      if (paymentMthd == "cash") noOfYears = 0;

      //   check user filled all data
      if (!customer || !employee || !paymentMthd || noOfYears == undefined)
        throw new Error("fill all required data");

      // get the selected unit
      const building = await buildingModel.findOne({ _id: buildingId });

      if (!building) throw new Error("this building not available");

      const unit = building.units.filter((ele) => {
        return ele._id == unitId;
      });
      if (unit.length == 0) throw new Error("this address not availble");

      //   check if unit sold or not yet
      if (unit[0].payment)
        throw new Error("this unit already sold you can't sell again");

      // get the price of the unit
      const price = unit[0].price;
      const { totalInvoices, noOfPaidInvoices, paidMoney } = paymentDetails(
        paymentMthd,
        noOfYears,
        price
      );

      //   sell the unit
      let sellUnit = await paymentModel.create({
        payment: {
          employee,
          customer,
          paymentMthd,
          noOfYears,
          totalInvoices,
          noOfPaidInvoices,
          paidMoney,
        },
      });

      if (!sellUnit) throw new Error("can't make sell operation");

      //   create invoice Number
      let invoiceNo = Math.floor(Math.random() * 1e10);

      //   pass the required data to create invoice function
      const invoiceRequiredData = {
        clinetName: customer,
        clientAddress: "client address",
        clientCity: "client city",
        clientCountry: "client country",
        invoiceNo,
        unitNo: `${unit[0].unitName}`,
        unitAddress: `${unit[0].unitAddress}`,
        buildingNo: `${building.buildingNum}`,
        price,
        paymentMthd,
        noOfYears,
        totalInvoices,
        noOfPaidInvoices,
        paidMoney,
      };

      //   create Invoice
      await createInvoice(invoiceRequiredData);

      //   add payment id to unit payment document
      await buildingModel.updateOne(
        { _id: buildingId, "units._id": unitId },
        {
          $set: { "units.$.payment": sellUnit._id, "units.$.status": "sold" },
          //   $set: { "units.$.status": "sold" },
        }
      );

      // add invoice number to payment collection
      const addInvoiceToPayment = await paymentModel.updateOne(
        {
          _id: sellUnit._id,
        },
        {
          $push: { "payment.invoicesNo": invoiceNo },
        }
      );

      sellUnit = await paymentModel.findOne({ _id: sellUnit._id });

      MyHelper.resHelper(res, 200, true, sellUnit, "Unit Sold succssfully");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //----------------------------------Cancel Selling Single Unit----------------------------//
  //

  static cancelSellingUnit = async (req, res) => {
    try {
      const { buildingId, unitId } = req.params;

      const building = await buildingModel.findOne({ _id: buildingId });

      if (!building) throw new Error("this building not available");

      const unit = building.units.filter((ele) => {
        return ele._id == unitId;
      });

      if (unit.length == 0) throw new Error("this Unit not available");

      if (!unit[0].payment) throw new Error("this unit not sold yet");

      //   delete payment
      const canceledPayment = await paymentModel.findByIdAndDelete({
        _id: unit[0].payment,
      });

      if (!canceledPayment) throw new Error("this payment not canceled yet");

      //   update the unit in building by  delete payment id and change status to free
      await buildingModel.updateOne(
        { _id: buildingId, "units._id": unitId },
        {
          $set: { "units.$.payment": "", "units.$.status": "free" },
        }
      );

      MyHelper.resHelper(res, 200, true, canceledPayment, "Payment canceled ");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //----------------------------------Get PAYMENT STATUS------------------------------------//
  //
  static getPaymentForSingleUnit = async (req, res) => {
    try {
      const { buildingId, unitId } = req.params;

      const building = await buildingModel.findOne({ _id: buildingId });

      if (!building) throw new Error("this building not available");

      const unit = building.units.filter((ele) => {
        return ele._id == unitId;
      });

      if (unit.length == 0) throw new Error("this address not available");

      if (!unit[0].payment) throw new Error("this unit not sold yet");

      //   Get Requird Payment
      const requiredPayment = await paymentModel.findOne({
        _id: unit[0].payment,
      });

      MyHelper.resHelper(
        res,
        200,
        true,
        requiredPayment,
        "Got payment for selected Unit"
      );
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //----------------------------------Pay new Invoice------------------------------------//
  //
  static payNewInvoice = async (req, res) => {
    try {
      const { buildingId, unitId } = req.params;
      const user = req.user;
      const building = await buildingModel.findOne({ _id: buildingId });

      if (!building) throw new Error("this building not available");

      const unit = building.units.filter((ele) => {
        return ele._id == unitId;
      });

      if (unit.length == 0) throw new Error("this address not available");

      if (!unit[0].payment) throw new Error("this unit not sold yet");

      //
      const payment = await paymentModel.findOne({
        _id: unit[0].payment,
      });

      if (!payment) throw new Error("there is no payment for this Unit");

      if (payment.payment.totalInvoices == payment.payment.noOfPaidInvoices) {
        throw new Error("this Unit finshed all insallemnts");
      }

      //
      const { noOfPaidInvoices, paidMoney, totalInvoices } = paymentDetails(
        payment.payment.paymentMthd,
        payment.payment.noOfYears,
        unit[0].price,
        payment.payment.noOfPaidInvoices + 1
      );

      //   Update payment collection
      await paymentModel.findOneAndUpdate(
        { _id: unit[0].payment },
        {
          $set: {
            "payment.noOfPaidInvoices": noOfPaidInvoices,
            "payment.paidMoney": paidMoney,
          },
        }
      );

      //   Create New Invoice

      let invoiceNo = Math.floor(Math.random() * 1e10);

      const invoiceRequiredData = {
        clinetName: payment.payment.customer,
        clientAddress: "client address",
        clientCity: "client city",
        clientCountry: "client country",
        employee: user.fNme,
        invoiceNo,
        unitNo: `${unit[0].unitName}`,
        unitAddress: `${unit[0].unitAddress}`,
        buildingNo: `${building.buildingNum}`,
        price: unit[0].price,
        paymentMthd: payment.payment.paymentMthd,
        noOfYears: payment.payment.noOfYears,
        totalInvoices,
        noOfPaidInvoices,
        paidMoney,
      };

      //   create Invoice
      await createInvoice(invoiceRequiredData);

      // add invoice number to payment collection
      await paymentModel.updateOne(
        {
          _id: unit[0].payment,
        },
        {
          $push: { "payment.invoicesNo": invoiceNo },
        }
      );

      const updatedPayment = await paymentModel.findOne({
        _id: unit[0].payment,
      });

      MyHelper.resHelper(res, 200, true, updatedPayment, "New Invoice Paid ");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //----------------------------------Show invoices------------------------------------//
  //

  static downloadInvoice = async (req, res) => {
    try {
      const { buildingId, unitId, invoice } = req.params;
      const building = await buildingModel.findOne({ _id: buildingId });
      if (!building) throw new Error("this building not available");

      const unit = building.units.filter((ele) => {
        return ele._id == unitId;
      });

      if (unit.length == 0) throw new Error("this Unit not available");

      if (!unit[0].payment) throw new Error("this unit not sold yet");

      const requiredPayment = await paymentModel.findOne({
        _id: unit[0].payment,
      });

      const invoices = requiredPayment.payment.invoicesNo;

      if (invoices.length == 0) throw new Error("there is no invoices to show");

      const requiredInvoice = invoices.filter((element) => {
        return element.toString() == invoice.toString();
      });

      if (requiredInvoice.length == 0)
        throw new Error("this invoice not available");

      let file = path.resolve(`invoices/${requiredInvoice[0]}.pdf`);
      await res.download(file);
      // if (!response) throw new Error("this invoice not available in server");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };
}

module.exports = Payment;
