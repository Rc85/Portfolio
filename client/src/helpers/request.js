import axios from 'axios';

export const Request = async(config, callback) => {
    const CancelToken = axios.CancelToken;

    await axios({...config, cancelToken: new CancelToken(function(c) {
      if (callback) {
        callback(c);
      }
    })})
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(err => {
      if (!axios.isCancel(err)) {
        throw err;
      }
    });
}