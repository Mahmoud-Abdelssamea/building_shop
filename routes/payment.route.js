const express = require("express");
const router = express.Router();

const Payment = require("../controller/payment.controller");
const auth = require("../middleware/auth.middleware");
const permission = require("../middleware/permission.middleware");

// Selling a Single Unit
router.post(
  "/:buildingId/add/:unitId",
  auth,
  permission,
  Payment.sellSingleUnit
);

router.delete(
  "/delete/:buildingId/:unitId",
  auth,
  permission,
  Payment.cancelSellingUnit
);

router.get(
  "/payment/:buildingId/:unitId",
  auth,
  permission,
  Payment.getPaymentForSingleUnit
);

router.get(
  "/payment/newInvoice/:buildingId/:unitId",
  auth,
  permission,
  Payment.payNewInvoice
);

router.get(
  "/download/:buildingId/:unitId/:invoice",
  auth,
  permission,
  Payment.downloadInvoice
);

module.exports = router;
