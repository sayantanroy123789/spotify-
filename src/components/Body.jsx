import axios from "axios";
import React, { useEffect } from "react";

export default function Body({ headerBackground }){
    useEffect(() => {
        const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '9a5b223449mshd1327f9d3cbc1c2p169eefjsn1fecbfd4a8bd',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
    })
}