import axios from 'axios';
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
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`,
      },
      data,
    });
    return res;
  } catch (err) {
    return err;
  }
};
