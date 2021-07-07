import axios from 'axios';
import { m } from 'framer-motion';
export const sendEmail = (
  firstName: string,
  lastName: string,
  email: string,
  inquiry: string,
  text: string,
  phone: string
) => {
  const data = { firstName, lastName, email, inquiry, text, phone };
  try {
    const res = axios({
      method: 'post',
      url: '/api/email',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    });
    return res;
  } catch (err) {
    return err;
  }
};
