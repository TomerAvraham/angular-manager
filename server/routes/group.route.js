const router = require("express").Router();
const GroupModel = require("../models/group.model");

router.get("/all", async (req, res) => {
  try {
    const groups = await GroupModel.find();
    res.status(200).send({ groups });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { name } = req.body;
    const newGroup = new GroupModel({
      name,
    });
    await newGroup.save();
    res.status(201).send({ message: "User created" });
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
