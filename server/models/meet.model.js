const { Schema, model } = require("mongoose");

const MeetSchema = new Schema({
  group: { type: Schema.Types.ObjectId, ref: "group" },
  description: String,
  start_date: Date,
  end_date: Date,
  room: String,
});

const Meet = model("meet", MeetSchema);

module.exports = Meet;
