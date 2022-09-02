const router = require('express').Router()
const blogController = require('../controllers/blog.controller')
const blogcontrolller = require('../controllers/blog.controller')

router.get('/',blogcontrolller.getAllBlogs)
router.post('/add',blogcontrolller.addBlog)
router.put('/update/:id',blogcontrolller.updateBlog)
router.get('/:id',blogcontrolller.getById)
router.delete('/:id', blogcontrolller.deleteBlog)
router.get('/user/:id', blogController.getUserBlogById)


module.exports = router