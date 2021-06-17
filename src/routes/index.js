const express = require('express');
const router = express.Router();
const { testController } = require('../controllers');

router.get('/api/testing/get', testController.getApi);
router.post('/api/testing/post', testController.postApi);

module.exports = router;