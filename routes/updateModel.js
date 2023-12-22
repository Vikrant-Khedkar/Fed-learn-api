const express =  require ("express");
const updateModel = require("../controllers/updateModelController.js")
const router = express.Router();

router.post('/updateModel',updateModel.updateModel);

module.exports = router;

