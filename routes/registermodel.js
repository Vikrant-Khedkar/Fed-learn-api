const express =  require ("express");
const registerModel = require("../controllers/registerModelController")
const router = express.Router();

router.post('/regModel',registerModel);

module.exports = router;

