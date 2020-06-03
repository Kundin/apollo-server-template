import { Schema } from 'mongoose';

export default new Schema(
  {
    types: {
      type: [String],
    },

    cover: {
      type: String,
    },

    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
    },

    description: {
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
