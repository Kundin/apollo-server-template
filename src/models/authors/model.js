/* eslint-disable func-names */

import { model } from 'mongoose';

import AuthorsSchema from './schema';

export default model('Books', AuthorsSchema);
