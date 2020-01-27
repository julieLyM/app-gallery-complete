const router = require('express').Router();

const picturesController = require('../controllers/picturesCtrl');

router.get('/*', picturesController.getPic);
// router.post('/', picturesController.addPic);

module.exports = router;
