import connectDB from '../../utils/database';

const Url = require('../../models/Url');

export default async function handler(req, res) {
  const { id } = req.query;

  await connectDB();

  console.log('HITTED');

  try {
    const url = await Url.findOne({ urlId: id });
    console.log(url);
    if (url) {
      url.clicks++;
      url.save();
      return res.redirect(url.origUrl);
    } else res.status(404).json('Not found');
  } catch (err) {
    console.log(err.message);
    res.status(500).json('Server Error');
  }
}
