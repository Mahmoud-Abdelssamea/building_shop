const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const UserRouter = require("./routes/user.route");
const RoleRouter = require("./routes/role.route");
const ProjectRouter = require("./routes/project.route");
const BuildingRouter = require("./routes/building.route");
const SellRouter = require("./routes/payment.route");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
mongoose.set("strictQuery", true);

app.use("/api/user", UserRouter);
app.use("/api/role", RoleRouter);
app.use("/api/project", ProjectRouter);
app.use("/api/building", BuildingRouter);
app.use("/api/sell", SellRouter);

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (!err) {
    app.listen(PORT, console.log(" DB & Server running at port " + PORT));
  } else {
    console.log("can not connect to database");
  }
});
