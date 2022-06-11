import axios from 'axios';

axios.defaults.baseURL = 'https://yesno.wtf';

export const getStatus = async () => {
  // const {
  //   data: { answer },
  // } = await axios.get('/api');

  return await fetch('https://yesno.wtf/api')
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      throw new Error();
    })
    .then(data => data.answer);

  // return answer;
};
