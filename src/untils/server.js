import axios from "axios";


export const server = axios.create({
  timeout: 5000,
  baseURL: "/Api",
  withCredentials: true
});

server.interceptors.request.use((config) => {
    return config;
  },
  e => {
    return Promise.reject(e);
  }
);

server.interceptors.response.use((res) => {
    if (res.statusText == "OK") {
      return res.data;
    }
  },
  (e) => Promise.reject(e)
);

export const http = function (type, url, params={}){
  if(type == "get"){
      let req = server.get(url,{  
        params: params
      })
      return req;
  }else if(type == "post"){
    let req = server.post(url,params);
    return req;
  }
}