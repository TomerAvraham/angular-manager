const router = require("express").Router();
const Meet = require("../models/meet.model");

router.get("/all", async (req, res) => {
  try {
    const meets = await Meet.find().populate({
      path: "group",
      select: "name _id",
    });
    res.status(200).send({ meets });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.post("/add", async (req, res) => {
  try {
    const newMeet = new Meet(req.body);
    await newMeet.save();
    res.status(201).send({ newMeet });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get("/ByGroup/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const meets = await Meet.find({ group: { _id: id } });
    res.status(200).send({ meets });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.post("/add");

module.exports = router;
