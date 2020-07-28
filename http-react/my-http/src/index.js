import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

//optimization for the axios url
//axios.defaults.baseURL='https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] ='AUTH TOKEN';
//default anyways
axios.defaults.headers.post['Content-Type'] ='application/json';

axios.interceptors.request.use(request =>{
    console.log(request);
    //edit request config
    return request;
},
error=>{
    console.log(error);
    return Promise.reject(error);

}
);


axios.interceptors.response.use(response =>{
    console.log(response);
    //edit responde config
    return response;
},
error=>{
    console.log(error);
    return Promise.reject(error);

}
);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
