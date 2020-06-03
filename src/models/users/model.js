/* eslint-disable func-names */

import { model } from 'mongoose';

import UsersSchema from './schema';

export default model('Users', UsersSchema);
