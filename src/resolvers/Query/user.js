const { Users } = require('../../models');

module.exports = async (obj, args, context, info) => {
  const { email } = args;

  return await Users.findOne({ email });
};
