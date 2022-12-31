const express = require("express");
const router = express.Router();

const Building = require("../controller/building.controller");
const auth = require("../middleware/auth.middleware");
const permission = require("../middleware/permission.middleware");

router.post("/:projectId/add", auth, permission, Building.createNewBuilding);
router.get("/all", auth, permission, Building.getAllBuildings);
router.get("/single/:buildingId", auth, permission, Building.getSingleBuilding);
router.put("/update/:buildingId", auth, permission, Building.updateBuilding);
router.delete("/delete/:buildingId", auth, permission, Building.deleteBuilding);

router.get("/:buildingId/unit", auth, permission, Building.getSingleUnit);
router.put("/:buildingId/unit", auth, permission, Building.updateSingleUnit);

module.exports = router;
