import User from './user';
import UnsentEmail from './unsentEmail';

const syncModels = async () => {
  await User.sync();
  await UnsentEmail.sync();
};

export { User, UnsentEmail, syncModels };