// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

const API = process.env.API_URL;

export default async function handler(req, res) {
  const { url } = req.body;

  const response = await axios({
    baseURL: 'https://kblbet.com',
    url: '/api/short',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({ origUrl: url }),
  });

  const { data } = response;
  console.log(data);

  res.status(200).json(data);
}
