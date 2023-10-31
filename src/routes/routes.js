const express =  require("express");
const pokeneasController = require("../controllers/pokeneasController.js");

const router = express.Router();

router.get('/', pokeneasController.index);
router.get('/show', pokeneasController.show);

module.exports = router;