const express = require('express');
const router = express.Router();

router.get('/acerca', (req, res) => {
    res.render('acerca');
});

module.exports = router;
