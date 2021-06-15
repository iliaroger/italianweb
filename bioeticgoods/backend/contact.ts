import axios from 'axios';
export const sendEmail = async (
  from: string,
  to: string,
  subject: string,
  text: string
) => {
  const data = { from, to, subject, text };
  try {
    const res = await axios({
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
