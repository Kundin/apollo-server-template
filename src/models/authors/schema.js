import { Schema } from 'mongoose';

export default new Schema(
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
