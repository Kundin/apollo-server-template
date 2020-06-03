import { Schema } from 'mongoose';

export default new Schema(
  {
    types: {
      type: [String],
      required: true,
    },

    cover: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    author: {
      type: Schema.Types.ObjectId,
      ref: 'Authors',
      required: true,
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
