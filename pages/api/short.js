import shortid from 'shortid';
import connectDB from '../../utils/database';
import { validateUrl } from '../../utils/utils';

const Url = require('../../models/Url');

export default async function handler(req, res) {
  const { id } = req.query;

  const { origUrl } = req.body;
  const base = process.env.BASE;

  const urlId = shortid.generate();
  if (validateUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;

        url = new Url({
          origUrl,
          shortUrl,
          urlId,
          date: new Date(),
        });

        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json('Server Error');
    }
  } else {
    res.status(400).json('Invalid Original Url');
  }
}
