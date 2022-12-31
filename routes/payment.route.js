const express = require("express");
const router = express.Router();

const Payment = require("../controller/payment.controller");
const auth = require("../middleware/auth.middleware");
const permission = require("../middleware/permission.middleware");

// create new user
router.post("/:buildingId/add", auth, permission, Payment.sellSingleUnit);

router.delete(
  "/delete/:buildingId",
  auth,
  permission,
  Payment.cancelSellingUnit
);

router.get(
  "/payment/:buildingId",
  auth,
  permission,
  Payment.getPaymentForSingleUnit
);

router.put("/payment/:buildingId", auth, permission, Payment.payNewInvoice);

router.post("/download/:buildingId", auth, permission, Payment.downloadInvoice);

module.exports = router;
