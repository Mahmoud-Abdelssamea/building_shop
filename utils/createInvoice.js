const easyinvoice = require("easyinvoice");
const fs = require("fs");

const createInvoice = async ({
  clinetName,
  clientAddress,
  clientCity,
  clientCountry,
  invoiceNo,
  unitNo,
  unitAddress,
  buildingNo,
  price,
  paymentMthd,
  noOfYears,
  totalInvoices,
  noOfPaidInvoices,
  paidMoney,
}) => {
  let data = {
    images: {
      logo: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    },
    // Your own data
    sender: {
      company: "DMS Constraction",
      address: "Cairo, Orange Digital Center",
      city: "Cairo",
      country: "Egypt",
    },
    // Your recipient
    client: {
      customer: `${clinetName}`,
      address: `${clientAddress}`,
      city: `${clientCity}`,
      country: `${clientCountry}`,
    },
    information: {
      // Invoice number
      number: invoiceNo,

      date: `${new Date().toISOString().slice(0, 10)}`,
      // Invoice due date
      "due-date": `${new Date(Date.now() + 864e5 * 15)
        .toISOString()
        .slice(0, 10)}`,
    },

    products: [
      {
        quantity: 1,
        description: `Flat No. ${unitNo} in Building No ${buildingNo}, Address:${unitAddress}`,
        "tax-rate": 0,
        price: paidMoney,
      },
    ],

    // The message you would like to display on the bottom of your invoice
    "bottom-notice": `
    payment method is (${paymentMthd}) for ${noOfYears} ${
      noOfYears > 1 ? "years" : "year"
    }
    this is invoice No. ${noOfPaidInvoices} and remaining
     ${totalInvoices - noOfPaidInvoices} invoices,
     balance: ${price - paidMoney} EGP`,
    // Settings to customize your invoice
    settings: {
      currency: "EGP",
    },
  };
  const result = await easyinvoice.createInvoice(data);
  await fs.writeFileSync(`invoices/${invoiceNo}.pdf`, result.pdf, "base64");
};

module.exports = createInvoice;
