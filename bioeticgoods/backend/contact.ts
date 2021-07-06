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
      url: 'https://bioeticgoods.iliaroger.de/api/email',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
        'Access-Control-Allow-Headers':
          'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
      },
      data,
    });
    return res;
  } catch (err) {
    return err;
  }
};
