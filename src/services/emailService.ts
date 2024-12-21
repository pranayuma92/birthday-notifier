import axios from 'axios';
import { UnsentEmail, User } from '../models';
import moment from 'moment';
import '../config/dotenv'

const EMAIL_API_URL = process.env.MAIL_SERVICE;

export const sendBirthdayEmail = async (user: User) => {
  try {
    await axios.post(`${EMAIL_API_URL}/send-email`, {
      message: `Hey, ${user.firstName} ${user.lastName}, it’s your birthday!`,
      email: user.email
    });
    console.log(`Email sent to ${user.firstName} ${user.lastName}`);
  } catch (error: any) {
    console.error(`Failed to send email: ${error.message}`);
    await UnsentEmail.create({
      userId: user.id,
      retryAt: moment().add(10, 'minutes').toDate(),
    });
  }
};