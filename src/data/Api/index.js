import * as config from '../config'

export const toJson = (res) => res.json();

export const checkStatus = (res) => {
    const {status} = res;
    if (status >= 200 && status < 300) {
        return res;
    }
    return Promise.reject(new Error(res.statusText || res.status));
};

export const fetchJson = (url, options = {}) => (fetch(url, {
    ...options,
    headers: {
        ...options.headers,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
}).then(checkStatus)
  .then(toJson));


export default {
  example: {
          get() {
              return fetchJson(`${config.ApiURL}/example`)
          }
  },
        postexample: {
            post(content) {
                return fetchJson(`${config.ApiURL}/postexampl`, {
                    method: 'POST',
                    body: JSON.stringify(content),
                })
            }

        }
}
