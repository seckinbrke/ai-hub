import {Platform} from 'react-native';
import axios from './index';

export const askToChatGpt = (messages: any) => {
  const url =
    Platform.OS === 'ios' ? '/gpt/chat/search/4o' : '/gpt/chat/search';
  return axios({
    method: 'POST',
    url,
    data: {messages},
  }).then((response: any) => response.data);
};


// export const askToChatGpt = (formData: any) => {
//   const url = '/aihub/chat/search/4o';
//   return axios({
//     method: 'POST',
//     url,
//     data: formData,
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       api_key: 'ca03na188ame03u1d78620de67282882a84',
//     },
//   }).then((response: any) => response.data)
//       .catch(err => {
//       throw err.response ? err.response.data : err;
//     });
// };