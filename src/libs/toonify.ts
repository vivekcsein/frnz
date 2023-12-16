
// const fetch = require('node-fetch');
// const FormData = require('form-data');

import { endpoint_toonify } from "@/utils/endpoints";

// const data = new FormData();
// data.append('image',);

// const url = 'https://toonify.p.rapidapi.com/v0/toonmojihd?proceed_without_face=false&return_aligned=false';
// const options = {
//     method: 'POST',
//     headers: {
//         'X-RapidAPI-Key': 'bc86b9e1bcmshe0b01bc8e8714e8p1e9427jsna2d61acc7d4f',
//         'X-RapidAPI-Host': 'toonify.p.rapidapi.com',
//         ...data.getHeaders(),
//     },
//     body: data
// };

// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }

type imgdataSend = {
    imgdata: string,
    getHeaders?: () => void;
}


const toonifyAPI = async (endpoint: string, data: imgdataSend) => {

    try {
        if (process.env.TOONIFY_KEY !== undefined) {
            let res = await fetch(`${endpoint}`, {
                method: 'POST',
                headers: {
                    'content-type': "dd",
                    'X-RapidAPI-Key': process.env.TOONIFY_KEY,
                    'X-RapidAPI-Host': 'toonify.p.rapidapi.com',
                    // ...data.getHeaders(),
                },
                body: data.imgdata
            })
            return res.text();
        }
    }
    catch (err) {
        console.error(err + "Failed to fetch data");
    }

};

export const getToonifyAPI = async (imgdata: imgdataSend) => {
    const data = await toonifyAPI(endpoint_toonify, imgdata);
    if (data != undefined) {
        return data;
    }
    return `data is not accurate`
};

