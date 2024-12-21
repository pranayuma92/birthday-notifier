import cron from 'node-cron';
import moment from 'moment-timezone';
import { User } from '../models';
import { sendBirthdayEmail } from '../services/emailService';
import { retryUnsentEmails } from '../services/retryService';

cron.schedule('* * * * *', retryUnsentEmails);

cron.schedule('0 9 * * *', async () => {
  const users = await User.findAll();

  for (const user of users) {
    const localTime = moment().tz(user.timezone);
    if (localTime.hour() === 9) {
      await sendBirthdayEmail(user);
    }
  }
});