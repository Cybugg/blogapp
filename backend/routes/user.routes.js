const router = require('express').Router()
const UserController = require('../controllers/user.controller')


router.get('/',UserController.getUsers);

router.post('/signup',UserController.signup)

router.post('/login',UserController.login)

module.exports = router;
