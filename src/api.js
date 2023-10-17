import axios from 'axios';
import React from 'react';

const createApi = ()=> {
    const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;
    const instance = axios.create({baseURL: baseUrl, timeout: 0});
    console.log(baseUrl);

    const api = { 

        async get(url) {
           try {
                const { data } = await instance.get(url)
                return data
            }
           catch(err) {
                return Promise.reject(err)
           }
        },
        //you can write all other 3 methods in here:
        async post(url, body) {
            try {
                const { data } = await instance.post(url, body)
                return data
            }
            catch(err) {
                return Promise.reject(err)
            }
        },

        async put(url, body) {
            try {
                const { data } = await instance.put(url,body)
                return data
            }
            catch(err) {
                return Promise.reject(err)
            }
        },

        async delete(url) {
            try {
                const { data } = await instance.delete(url)
                return data
            }
            catch(err) {
                return Promise.reject(err)
            }
        }

    }
    return api;
}

export const useApi = ()=> {
    const api = React.useMemo(()=>{
        return createApi();
    }, []) //singleton
    //if something in [] (dependency array) changes, tells useMemo to recompute
return api;
}