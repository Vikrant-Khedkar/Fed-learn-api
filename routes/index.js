const express = require("express")
const router =  express.Router()

const registerModelRouter = require('./registermodel')
const getModelRouter = require('./getModel')
const updateModelRouter = require('./updateModel')
router.use('/',registerModelRouter);
router.use('/',getModelRouter)
router.use('/',updateModelRouter)
module.exports = router;