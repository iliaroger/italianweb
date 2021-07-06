import axios from 'axios';
export const sendEmail = async (
  firstName: string,
  lastName: string,
  email: string,
  inquiry: string,
  text: string,
  phone: string
) => {
  const data = { firstName, lastName, email, inquiry, text, phone };
  try {
    const res = await axios({
      method: 'post',
      url: '/api/email',
      data,
    });
    return res;
  } catch (err) {
    return err;
  }
};
