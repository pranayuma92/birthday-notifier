import { UnsentEmail, User } from '../models';
import { sendBirthdayEmail } from './emailService';

export const retryUnsentEmails = async () => {
  const unsentEmails = await UnsentEmail.findAll({ where: { retryAt: { lte: new Date() } } });

  for (const email of unsentEmails) {
    const user = await User.findByPk(email.userId);
    if (user) {
      await sendBirthdayEmail(user);
      await email.destroy();
    }
  }
};