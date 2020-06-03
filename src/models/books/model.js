/* eslint-disable func-names */

import { model } from 'mongoose';

import BooksSchema from './schema';

export default model('Books', BooksSchema);
