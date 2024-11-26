const express = require('express');
const { shortenUrl, redirectUrl, getStats } = require('../controllers/urlcontrollers');
const router = express.Router();

router.post('/shorten', shortenUrl);
router.get('/:shortId', redirectUrl);
router.get('/stats/:shortId', getStats);

module.exports = router;
