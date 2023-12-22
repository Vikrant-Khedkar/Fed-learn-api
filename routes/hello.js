const express =  require ("express");
const hello = require("../controllers/hello")
const router = express.Router();

router.post('/hello',hello.hello);

module.exports = router;

