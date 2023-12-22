const express = require("express")
const router =  express.Router()

const registerModelRouter = require('./registermodel')
const getModelRouter = require('./getModel')
const updateModelRouter = require('./updateModel')
const hello = require("./hello")
router.use('/',registerModelRouter);
router.use('/',getModelRouter)
router.use('/',updateModelRouter)
router.use('/',hello)
module.exports = router;