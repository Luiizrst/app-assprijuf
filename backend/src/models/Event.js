const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  note: {
    type: String,
  },

  start: {
    type: String,
  },

  duration: {
    type: String,
  },

  dateView: {
    type: String,
  },

  durationView: {
    type: String,
  },

  orderDate: {
    type: Date,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Event", EventSchema);
