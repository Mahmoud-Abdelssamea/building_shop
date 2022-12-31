const paymentDetails = (
  paymentMthd,
  noOfYears,
  price,
  noOfPaidInvoices = 1
) => {
  if (paymentMthd == "cash") {
    return { totalInvoices: 1, noOfPaidInvoices: 1, paidMoney: price };
  } else if (paymentMthd == "half-yearly") {
    return {
      totalInvoices: noOfYears * 2,
      noOfPaidInvoices,
      paidMoney: noOfPaidInvoices * (price / (noOfYears * 2)),
    };
  } else if (paymentMthd == "quarter") {
    return {
      totalInvoices: noOfYears * 4,
      noOfPaidInvoices,
      paidMoney: noOfPaidInvoices * (price / (noOfYears * 4)),
    };
  }
};

module.exports = paymentDetails;
