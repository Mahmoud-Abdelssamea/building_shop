const validator = require("validator");
const buildingModel = require("../model/buildingModel");
const projectModel = require("../model/projctModel");
const createUnits = require("../utils/createUnits");
const MyHelper = require("../utils/helper");

class Building {
  //
  //----------------------------------Create New Building----------------------------//
  //

  static createNewBuilding = async (req, res) => {
    try {
      // get data from body
      const { buildingNum, noFloors } = req.body;
      const { projectId } = req.params;

      // check data is valid
      if (!buildingNum || !noFloors)
        throw new Error("please fill all required data ");

      if (!validator.isMongoId(projectId))
        throw new Error("this project not available");

      const isProjectAvailable = await projectModel.findOne({
        _id: projectId,
      });

      if (!isProjectAvailable) throw new Error("this project not available");

      // save data to db
      const units = createUnits(noFloors, buildingNum);

      //   res.send(units);
      //   add new building to database
      const newBuilding = await buildingModel.create({
        buildingNum,
        projectId,
        noFloors,
        units,
      });

      //   save the new database ID in project
      //   const buildingId = newBuilding._id.toString();
      await projectModel.findByIdAndUpdate(
        { _id: projectId },
        { $push: { buildingsList: newBuilding._id } }
      );

      MyHelper.resHelper(res, 200, true, newBuilding, "new building added");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //----------------------------------Delete Building----------------------------//
  //
  static deleteBuilding = async (req, res) => {
    try {
      // Get data from params and check it
      const { buildingId } = req.params;
      if (!validator.isMongoId(buildingId))
        throw new Error("buildingId not correct");

      // delete building
      const deleteBuilding = await buildingModel.findByIdAndDelete({
        _id: buildingId,
      });

      if (!deleteBuilding)
        throw new Error("this building is not available to delete");

      // update project by deleting building id from buildingsList
      await projectModel.findByIdAndUpdate(
        { _id: deleteBuilding.projectId },
        { $pull: { buildingsList: buildingId } }
      );

      MyHelper.resHelper(res, 200, true, deleteBuilding, "building deleted");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //----------------------------------update Building----------------------------//
  //

  static updateBuilding = async (req, res) => {
    try {
      // Get data from params and check it
      const { buildingId } = req.params;
      let { noFloors, buildingNum } = req.body;

      if (!validator.isMongoId(buildingId))
        throw new Error("buildingId not correct");

      // get the required Building from db
      const requiredToUpdateBuilding = await buildingModel.findOne({
        _id: buildingId,
      });

      if (!requiredToUpdateBuilding)
        throw new Error("this building  is not available");

      // update building
      if (noFloors && !buildingNum) {
        buildingNum = requiredToUpdateBuilding.buildingNum;
      } else if (!noFloors && buildingNum) {
        noFloors = requiredToUpdateBuilding.noFloors;
      }

      const units = createUnits(noFloors, buildingNum);

      let updatedBuilding = await buildingModel.updateOne(
        {
          _id: buildingId,
        },
        {
          noFloors,
          buildingNum,
          units,
        }
      );

      if (!updatedBuilding)
        throw new Error("this building is not available to delete");

      updatedBuilding = await buildingModel.findById({
        _id: buildingId,
      });

      MyHelper.resHelper(res, 200, true, updatedBuilding, "building updated");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //----------------------------------Get All Buildings----------------------------//
  //
  static getAllBuildings = async (req, res) => {
    try {
      const allBuildings = await buildingModel.find({});

      if (!allBuildings) throw new Error("no building to collect");

      MyHelper.resHelper(res, 200, true, allBuildings, "all buildings");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //----------------------------------Get single Building----------------------------//
  //

  static getSingleBuilding = async (req, res) => {
    try {
      const { buildingId } = req.params;

      if (!validator.isMongoId(buildingId))
        throw new Error("buildingId not correct");

      const singleBuilding = await buildingModel.findOne({ _id: buildingId });

      if (!singleBuilding) throw new Error("this building is not available");

      MyHelper.resHelper(res, 200, true, singleBuilding, "single project");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //----------------------------------Get single Unit----------------------------//
  //
  static getSingleUnit = async (req, res) => {
    try {
      const { buildingId } = req.params;
      const unitAddress = req.query.address;

      if (!validator.isMongoId(buildingId))
        throw new Error("buildingId not correct");

      // send  updated unit to user
      const building = await buildingModel.findOne({ _id: buildingId });

      if (!building) throw new Error("this building not available");
      const singleUnit = building.units.filter((element) => {
        return element.unitAddress == unitAddress;
      });

      if (singleUnit.length == 0)
        throw new Error("this unit address not available");

      MyHelper.resHelper(res, 200, true, singleUnit, "Get Single Unit");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };
  //
  //----------------------------------Update Single Unit----------------------------//
  //
  static updateSingleUnit = async (req, res) => {
    try {
      const { buildingId } = req.params;
      const unitAddress = req.query.address;
      const { price, status } = req.body;

      //   update price in case it's available
      price &&
        (await buildingModel.updateOne(
          { _id: buildingId, "units.unitAddress": unitAddress },
          { $set: { "units.$.price": price } }
        ));

      //   update status in case it's available
      status &&
        (await buildingModel.updateOne(
          { _id: buildingId, "units.unitAddress": unitAddress },
          { $set: { "units.$.status": status } }
        ));

      // send  updated unit to user
      const building = await buildingModel.findById({ _id: buildingId });
      const updatedUnit = building.units.filter((element) => {
        return element.unitAddress == unitAddress;
      });

      if (updatedUnit.length == 0)
        throw new Error("this unit address not available");

      MyHelper.resHelper(res, 200, true, updatedUnit, "update single unit");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };
}

module.exports = Building;
