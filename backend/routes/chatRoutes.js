const express = require('express')
const { protect } = require('../middleware/authMiddleware')
const {accessChat,fetchChats,createGroupChat,renameGroupChat,addToGroup,removeFromGroup} = require('../controllers/chatControllers')

const router = express.Router()

router.route('/').post(protect,accessChat)
router.route('/').get(protect,fetchChats)
router.route('/group').post(protect,createGroupChat)
router.route('/rename').put(protect,renameGroupChat)
router.route('/addToGroup').put(protect,addToGroup)
router.route('/removeFromGroup').put(protect,removeFromGroup)


module.exports = router