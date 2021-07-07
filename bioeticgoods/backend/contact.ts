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
        Authorization:
          'Bearer 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',
      },
      data,
    });
    return res;
  } catch (err) {
    return err;
  }
};
