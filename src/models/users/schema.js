import { Schema } from 'mongoose';

export default new Schema(
  {
    privilegies: {
      type: [String],
      required: true,
    },

    givenName: {
      type: String,
      required: true,
    },

    familyName: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
    },

    email: {
      type: String,
      required: true,
    },

    books: {
      type: Schema.Types.ObjectId,
      ref: 'Books',
    },
  },
  {
    timestamps: true,

    toJSON: {
      virtuals: true,
    },
  },
);
