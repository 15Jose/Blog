var express = require('express');
var router = express.Router();
const articleController = require('../controllers/articleController');
const commentController = require('/article/:articleId/comment/create, commentController.createComment');
const userController = require('../controllers/userCOntroller');
router.get('/', function(req, res) {
  res.redirect('/article')});
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/article/add', articleController.renderAddForm);
router.post('/article/add',articleController.addArticle);
router.get('/article/:articleId', articleController.displayArticle);
router.get('/article/', articleController.displayAll);
router.get('/article/:articleId/edit', articleController.renderEditForm);
router.get('/article/:articleId/edit', articleController.updateArticle);
router.get('/article/:articleId/delete', articleController.deleteArticle);
module.exports = router;

router.post('/article/:articleId/comment/create', commentController.createComment);
router.post('/comment/:commentId/reply/create', commentController.addReply);
