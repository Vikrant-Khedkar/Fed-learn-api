const express =  require ("express");
const getModel = require("../controllers/getModelController")
const router = express.Router();

router.post('/getModel',getModel);

module.exports = router;

