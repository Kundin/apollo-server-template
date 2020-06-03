const { Schema } = require('mongoose');

module.exports = new Schema(
  {
    firstName: {
      type: [String],
    },

    lastName: {
      type: String,
    },
  },
  {
    timestamps: true,

    toJSON: {
      virtuals: true,
    },
  },
);
