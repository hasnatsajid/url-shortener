import connectDB from '../../../utils/database';

const Url = require('../../../models/Url');

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await connectDB();

  try {
    const url = await Url.findOne({ urlId: id });
    console.log(url);
    if (url) {
      url.clicks++;
      url.save();
      return res.status(200).json({ url: url });
    } else res.status(404).json('Not found');
  } catch (err) {
    console.log(err.message);
    res.status(500).json('Server Error');
  }
}
