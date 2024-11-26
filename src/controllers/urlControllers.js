const Url = require('../models/urlModel');
const shortid = require('shortid');

// POST /shorten
exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) return res.status(400).json({ error: "URL is required." });

  try {
    const shortId = shortid.generate();
    const newUrl = await Url.create({ originalUrl, shortId });
    res.status(201).json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortId}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /:shortId
exports.redirectUrl = async (req, res) => {
  const { shortId } = req.params;

  try {
    const urlData = await Url.findOneAndUpdate(
      { shortId },
      { $inc: { clicks: 1 }, lastAccessed: new Date() },
      { new: true }
    );
    if (!urlData) return res.status(404).json({ error: "Short URL not found." });

    res.redirect(urlData.originalUrl);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /stats/:shortId
exports.getStats = async (req, res) => {
  const { shortId } = req.params;

  try {
    const urlData = await Url.findOne({ shortId });
    if (!urlData) return res.status(404).json({ error: "Short URL not found." });

    res.status(200).json({
      originalUrl: urlData.originalUrl,
      clicks: urlData.clicks,
      lastAccessed: urlData.lastAccessed,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
